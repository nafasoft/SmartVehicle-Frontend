import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { RegistreseComponent } from './modulos/seguridad/registrese/registrese.component';


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
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: "seguridad",
    loadChildren : () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: "administracion",
    loadChildren : () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: "asesor",
    loadChildren : () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path: "cliente",
    loadChildren : () => import("./modulos/cliente/cliente.module").then(x => x.ClienteModule)
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
