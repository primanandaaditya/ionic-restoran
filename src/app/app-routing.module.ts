import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'hubungikami',
    loadChildren: () => import('./hubungikami/hubungikami.module').then( m => m.HubungikamiPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'konf-deliveri',
    loadChildren: () => import('./konf-deliveri/konf-deliveri.module').then( m => m.KonfDeliveriPageModule)
  },
  {
    path: 'pilih-menu',
    loadChildren: () => import('./pilih-menu/pilih-menu.module').then( m => m.PilihMenuPageModule)
  },
  {
    path: 'reservasi',
    loadChildren: () => import('./reservasi/reservasi.module').then( m => m.ReservasiPageModule)
  },
  {
    path: 'menu-reservasi',
    loadChildren: () => import('./menu-reservasi/menu-reservasi.module').then( m => m.MenuReservasiPageModule)
  },
  {
    path: 'order-reservasi/:id',
    loadChildren: () => import('./order-reservasi/order-reservasi.module').then( m => m.OrderReservasiPageModule)
  },
  {
    path: 'keranjang-reservasi',
    loadChildren: () => import('./keranjang-reservasi/keranjang-reservasi.module').then( m => m.KeranjangReservasiPageModule)
  },
  {
    path: 'konf-reservasi',
    loadChildren: () => import('./konf-reservasi/konf-reservasi.module').then( m => m.KonfReservasiPageModule)
  },
  {
    path: 'keranjang-delivery',
    loadChildren: () => import('./keranjang-delivery/keranjang-delivery.module').then( m => m.KeranjangDeliveryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
