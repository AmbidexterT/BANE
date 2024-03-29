import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'info',
    loadChildren: () => import('../app/info/info.module').then(m => m.InfoModule),
  },
  {
    path: 'news',
    loadChildren: () => import('../app/news/news.module').then(m => m.NewsModule),
  },
  {
    path: 'gallery',
    loadChildren: () => import('../app/gallery/gallery.module').then(m => m.GalleryModule),
  },
  {
    path: 'payment',
    loadChildren: () => import('../app/payment/payment.module').then(m => m.PaymentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
