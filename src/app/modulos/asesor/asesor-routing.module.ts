import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoComponent } from './vehiculo/vehiculo.component';

const routes: Routes = [
  {
    path: 'vehiculo',
    component: VehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
