import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-eliminar-vehiculo',
  templateUrl: './eliminar-vehiculo.component.html',
  styleUrls: ['./eliminar-vehiculo.component.css']
})
export class EliminarVehiculoComponent implements OnInit {

  id:string = ''

  fgValidador: FormGroup = this.fb.group({
    'id':['',[Validators.required]],
    'marca': ['',[Validators.required]],
    'modelo': ['',[Validators.required]],
    'anio': ['',[Validators.required]],
    'valor': ['',[Validators.required]],
    'tipoDeOferta': ['',[Validators.required]],
    'fotografia': ['',[Validators.required]],
    'enlace': ['']
  });

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.BuscarVehiculo();
  }

  EliminarVehiculo(){
    this.vehiculoServicio.EliminarVehiculo(this.id).subscribe((datos:any) => {
      this.router.navigate(["/asesor/buscar-vehiculo"])
      alert("vehiculo eliminado")
    },(error:any) => {
      alert("Error actualizando datos del vehiculo")
    })
  }

  BuscarVehiculo(){
    this.vehiculoServicio.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloVehiculo) => {
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["marca"].setValue(datos.marca);
      this.fgValidador.controls["modelo"].setValue(datos.modelo);
      this.fgValidador.controls["anio"].setValue(datos.anio);
      this.fgValidador.controls["valor"].setValue(datos.valor);
      this.fgValidador.controls["tipoDeOferta"].setValue(datos.tipoDeOferta);
      this.fgValidador.controls["fotografia"].setValue(datos.fotografia);
      this.fgValidador.controls["enlace"].setValue(datos.enlace);
    });
  }
}
