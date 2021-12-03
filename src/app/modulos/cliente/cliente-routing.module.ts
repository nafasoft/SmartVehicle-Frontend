import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {
    path: "solicitud",
    component: SolicitudComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
