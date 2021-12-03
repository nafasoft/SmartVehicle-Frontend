import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


@NgModule({
  declarations: [
    VehiculoComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
