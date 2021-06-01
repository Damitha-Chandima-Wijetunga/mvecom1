import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeMasterPageComponent } from './master-pages/home-master-page/home-master-page.component';

const routes: Routes = [
  { path:'',pathMatch:'full',component:HomeMasterPageComponent},
  { path:'home-master',component:HomeMasterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
