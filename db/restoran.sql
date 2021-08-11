-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 11, 2021 at 12:31 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `restoran`
--

-- --------------------------------------------------------

--
-- Table structure for table `jenis_order`
--

CREATE TABLE `jenis_order` (
  `id` int(11) NOT NULL,
  `kode` int(11) NOT NULL,
  `nama` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jenis_order`
--

INSERT INTO `jenis_order` (`id`, `kode`, `nama`) VALUES
(1, 1, 'delivery'),
(2, 2, 'reservasi');

-- --------------------------------------------------------

--
-- Table structure for table `jenis_produk`
--

CREATE TABLE `jenis_produk` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jenis_produk`
--

INSERT INTO `jenis_produk` (`id`, `nama`) VALUES
(1, 'makanan'),
(2, 'minuman'),
(3, 'cemilan');

-- --------------------------------------------------------

--
-- Table structure for table `keranjang`
--

CREATE TABLE `keranjang` (
  `id_user` int(11) NOT NULL,
  `id_produk` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `pesanan_detail`
--

CREATE TABLE `pesanan_detail` (
  `id` int(11) NOT NULL,
  `nomor` varchar(100) DEFAULT NULL,
  `id_produk` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `harga` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan_detail`
--

INSERT INTO `pesanan_detail` (`id`, `nomor`, `id_produk`, `qty`, `harga`) VALUES
(13, '0003', 2, 3, 20000);

-- --------------------------------------------------------

--
-- Table structure for table `pesanan_master`
--

CREATE TABLE `pesanan_master` (
  `id` int(11) NOT NULL,
  `jenis_pesanan` int(11) NOT NULL,
  `nomor` varchar(100) DEFAULT NULL,
  `tanggal` date NOT NULL DEFAULT current_timestamp(),
  `ongkir` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesanan_master`
--

INSERT INTO `pesanan_master` (`id`, `jenis_pesanan`, `nomor`, `tanggal`, `ongkir`, `total`, `id_user`) VALUES
(5, 1, '0003', '2021-08-11', 10000, 20000, 3);

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id` int(11) NOT NULL,
  `nama` varchar(80) DEFAULT NULL,
  `jenis` tinyint(1) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL,
  `gambar` varchar(80) DEFAULT NULL,
  `keterangan` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id`, `nama`, `jenis`, `harga`, `gambar`, `keterangan`) VALUES
(1, 'Nasi Goreng Ayam', 1, 15000, 'nasgorayam.jpg', 'Nasi goreng dengan campuran telor dan ayam. Nikmat disantap sore dan malam hari.'),
(2, 'Nasi Goreng Kambing', 1, 20000, 'nasgorkambing.jpg', 'Nasi goreng dengan campuran telor dan kambing.Nikmat disantap sore dan malam hari.'),
(3, 'Es Teh', 2, 4000, 'esteh.jpg', 'Minuman khas Indonesia, segar dan manis.'),
(4, 'Es Jeruk', 2, 6000, 'esjeruk.jpg', 'Minuman segar dengan rasa jeruk pilihan.'),
(5, 'Soda Gembira', 2, 15000, 'sodagembira.jpg', 'Susu sprite dengan soda gembia'),
(6, 'Es semangka', 2, 5000, 'essemangka.jpg', 'Hanya buah semangka');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `id_wilayah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nama`, `email`, `password`, `id_wilayah`) VALUES
(1, 'Nanda', 'nanda@gmail.com', '$2y$10$RzXf22YzA3rtP1kTDcwCVOCM7hlpUcG/Yw/MhLrVJfpdbVeiOQYZa', 3),
(3, 'Sheira', 'sheira@gmail.com', '$2y$10$SU0NMdDTYe9dfCYI2GXzWuH4NIJ44hnM3iBvcpLGRJq3ALJ5CKjFu', 3),
(4, 'Putri', 'putri@gmail.com', '$2y$10$6UVKi97Jx0Raw75KotPsoOuK.P0P9Ncd0C15hbZQeisQEJdbYo4GG', 3),
(5, 'prima', 'prima@gmail.com', '$2y$10$nK72fQ7.U6YZSxYfEZJVruApzDlLVR6huNSo2V.xDrgaeRhRGZPdW', 3),
(6, 'arif', 'arif@gmail.com', '$2y$10$qmacAIOzOyNO2we3v5.2dOF8uXjymZhy1NriySdqYf2ta6J7AMp/m', 3),
(7, 'sania', 'sania@gmail.com', '$2y$10$Y.IKO2S3Kc0RCxg7ooFTJOrohahU6rNYeMDK.SAb9EsKK1kCT4SYi', 3),
(8, 'baku', 'baku@gmail.com', '$2y$10$m4E2F/sCshD1p8joN3YiY.TCk/Z0H/ENZCstZiNTAGMiW9gF1iw86', 3),
(9, 'buy', 'buy@gmail.com', '$2y$10$5H4gYCzvVE526H1Wb3Izsu9t79oOn6dKbD9Y4s3/Z0KJ7hbnAsmo6', 1),
(10, 'Boy', 'boy@gmail.com', '$2y$10$AiZpoqPUS73IoWuiGzeC8OC5cvwNUMIUCOuu7jb.P479qi0R75QSm', 2),
(11, 'rian', 'rian@gmail.com', '$2y$10$HeWnR.RJSrjhFYLlsQKZROv6foXdQy9SBsOTcwTy7rQ3P4DM6o1xS', 4);

-- --------------------------------------------------------

--
-- Table structure for table `wilayah`
--

CREATE TABLE `wilayah` (
  `id` int(11) NOT NULL,
  `nama` varchar(50) DEFAULT NULL,
  `jarak` int(11) DEFAULT NULL,
  `harga` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `wilayah`
--

INSERT INTO `wilayah` (`id`, `nama`, `jarak`, `harga`) VALUES
(1, 'Cengkareng', 1, 5000),
(2, 'Grogol Petamburan', 2, 10000),
(3, 'Kalideres', 1, 5000),
(4, 'Kebon Jerok', 1, 5000),
(5, 'Kembangan', 3, 15000),
(6, 'Palmerah', 4, 20000),
(7, 'Taman Sari', 4, 20000),
(8, 'Tambora', 5, 25000);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `jenis_order`
--
ALTER TABLE `jenis_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jenis_produk`
--
ALTER TABLE `jenis_produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pesanan_detail`
--
ALTER TABLE `pesanan_detail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pesanan_master`
--
ALTER TABLE `pesanan_master`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wilayah`
--
ALTER TABLE `wilayah`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `jenis_order`
--
ALTER TABLE `jenis_order`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `jenis_produk`
--
ALTER TABLE `jenis_produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `pesanan_detail`
--
ALTER TABLE `pesanan_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `pesanan_master`
--
ALTER TABLE `pesanan_master`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `wilayah`
--
ALTER TABLE `wilayah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
