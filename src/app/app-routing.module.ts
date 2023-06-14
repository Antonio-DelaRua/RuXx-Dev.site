import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { CreateCarComponent } from './pages/create-car/create-car.component';
import { AboutComponent } from './pages/about/about.component';
import { ConcesionarioComponent } from './pages/concesionario/concesionario.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FerrariComponent } from './components/Marcas/ferrari/ferrari.component';
import { LamborghiniComponent } from './components/Marcas/lamborghini/lamborghini.component';
import { BmwComponent } from './components/Marcas/bmw/bmw.component';
import { PorscheComponent } from './components/Marcas/porsche/porsche.component';





const routes: Routes = [


  {path:'', redirectTo: 'RuXx', pathMatch: 'full'},
  {path: 'RuXx', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateCarComponent},
  {path: 'concesionario',  component: ConcesionarioComponent},
  {path: 'Ferrari', component: FerrariComponent},
  {path: 'Lamborghini', component: LamborghiniComponent},
  {path: 'Bmw', component: BmwComponent},
  {path: 'Porsche', component: PorscheComponent},
  {path: '**', component: NotFoundComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
