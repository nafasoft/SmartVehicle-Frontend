import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { SolicitudComponent } from './solicitud/solicitud.component';


@NgModule({
  declarations: [
    SolicitudComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
