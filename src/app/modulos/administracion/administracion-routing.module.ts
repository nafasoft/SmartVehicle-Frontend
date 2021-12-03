import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './asesor/asesor.component';
import { TipoDeVehiculoComponent } from './tipo-de-vehiculo/tipo-de-vehiculo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';

const routes: Routes = [
  {
    path: "asesor",
    component: AsesorComponent 
  },
  {
    path: "tipo-de-vehiculo",
    component: TipoDeVehiculoComponent 
  },
  {
    path: "ubicacion",
    component: UbicacionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
