import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { MisionComponent } from './plantilla/mision/mision.component';
import { VisionComponent } from './plantilla/vision/vision.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path: "mision",
    component: MisionComponent
  },
  {
    path: "vision",
    component: VisionComponent
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
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
