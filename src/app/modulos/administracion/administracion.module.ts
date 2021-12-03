import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { AsesorComponent } from './asesor/asesor.component';
import { TipoDeVehiculoComponent } from './tipo-de-vehiculo/tipo-de-vehiculo.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';


@NgModule({
  declarations: [
    AsesorComponent,
    TipoDeVehiculoComponent,
    UbicacionComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
