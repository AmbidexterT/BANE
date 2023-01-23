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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
