import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { RegistreseComponent } from './plantilla/registrese/registrese.component';


const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path: "contacto",
    component: ContactoComponent
  },
  {
    path: "registrese",
    component: RegistreseComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
