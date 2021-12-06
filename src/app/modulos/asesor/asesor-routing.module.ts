import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';


const routes: Routes = [
  {
    path: 'buscar-vehiculo',
    component: BuscarVehiculoComponent
  },
  {
    path: 'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  {
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent
  },
  {
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
