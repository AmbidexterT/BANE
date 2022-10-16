import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoRoutingModule } from '../info/info-routing.module';
import { InfoModule } from '../info/info.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'info',
    loadChildren: () => import('../info/info.module').then(m => m.InfoModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavBarRoutingModule {
}
