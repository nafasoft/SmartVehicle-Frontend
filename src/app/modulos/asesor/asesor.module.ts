import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarVehiculoComponent,
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesorModule { }
