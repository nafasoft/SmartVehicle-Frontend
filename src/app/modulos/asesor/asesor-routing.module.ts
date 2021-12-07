import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
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
    component: CrearVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'editar-vehiculo/:id',
    component: EditarVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent,
    canActivate: [ValidadorSesionGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
