<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require_once ('../../koneksi.php');

$data = json_decode(file_get_contents('php://input'), true);

if (isset($data['jenis_pesanan']) && isset($data['nomor']) && isset($data['ongkir']) && isset($data['total']) && isset($data['id_user'])  ){

    $jenis_pesanan      = $data['jenis_pesanan'];
    $nomor              = $data['nomor'];
    $ongkir             = $data['ongkir'];
    $total              = $data['total'];
    $id_user            = $data['id_user'];

    if ($jenis_pesanan == '' || $nomor == '' || $ongkir == '' || $total == '' || $id_user == ''){
        $message="Semua input harus diisi";
        $status=0;
    } else {

        //masukkan ke tabel pesanan master
        $sql = "insert into pesanan_master (jenis_pesanan, nomor, ongkir, total, id_user) VALUES (:jenis_pesanan, :nomor, :ongkir, :total, :id_user)";
        $stmt = $db->prepare($sql);

        $param = array(
            ":jenis_pesanan" => $jenis_pesanan,
            ":nomor" => $nomor,
            ":ongkir" => $ongkir,
            ":total" => $total,
            ":id_user" => $id_user
        );
        $saved = $stmt->execute($param);

        //masukkan ke tabel pesanan detail
        $sql = "INSERT INTO pesanan_detail (id_produk,harga,qty) SELECT id_produk,harga,sum(qty) FROM keranjang WHERE id_user =:id_user GROUP BY id_produk,harga";
        $stmt = $db->prepare($sql);

        $param = array(
            ":id_user" => $id_user
        );
        $saved = $stmt->execute($param);


        //update kolom nomor pada tabel pesanan detail
        $sql = "update pesanan_detail SET nomor =:nomor WHERE nomor IS NULL";
        $stmt = $db->prepare($sql);

        $param = array(
            ":nomor" => $nomor
        );
        $saved = $stmt->execute($param);

        //delete id user pada tabel keranjang
        $sql = "delete from keranjang WHERE id_user =:id_user";
        $stmt = $db->prepare($sql);

        $param = array(
            ":id_user" => $id_user
        );
        $saved = $stmt->execute($param);

        $message="Pesanan berhasil disimpan";
        $status=1;
    }

    $arr=array("status"=>$status,"message"=>$message);
    echo json_encode($arr);
}
?>
