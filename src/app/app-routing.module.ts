import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainViewComponent } from './main-view/main-view.component';

const routes: Routes = [
  {path: '', redirectTo: '/mainView', pathMatch: 'full'},
  {path: 'mainView', component: MainViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
