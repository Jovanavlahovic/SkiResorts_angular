import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { SkiresortsComponent } from './skiresorts/skiresorts.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'about', component:AboutComponent},
  {path: 'resort/:id', component: SkiresortsComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
