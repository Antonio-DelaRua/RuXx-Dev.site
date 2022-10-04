import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { CreateCarComponent } from './pages/create-car/create-car.component';
import { AboutComponent } from './pages/about/about.component';
import { ConcesionarioComponent } from './pages/concesionario/concesionario.component';





const routes: Routes = [


  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateCarComponent},
  {path: 'RuXx', component: AboutComponent},
  {path: 'concesionario',  component: ConcesionarioComponent},
  {path: 'about', component: AboutComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
