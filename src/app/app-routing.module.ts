import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SEARCHComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search/:date', component: SEARCHComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
