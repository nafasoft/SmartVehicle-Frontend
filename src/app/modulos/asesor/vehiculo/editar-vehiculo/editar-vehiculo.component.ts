import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {

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

  EditarVehiculo(){
    let v = new ModeloVehiculo();
    v.id = this.id;
    v.marca = this.fgValidador.controls["marca"].value;
    v.modelo = this.fgValidador.controls["modelo"].value;
    v.anio = this.fgValidador.controls["anio"].value;
    v.valor = this.fgValidador.controls["valor"].value;
    v.tipoDeOferta = this.fgValidador.controls["tipoDeOferta"].value;
    v.fotografia = this.fgValidador.controls["fotografia"].value;
    v.enlace = this.fgValidador.controls["enlace"].value;
    this.vehiculoServicio.ActualizarVehiculo(v).subscribe((datos: ModeloVehiculo) => {
      this.router.navigate(["/asesor/buscar-vehiculo"])
      alert("Vehiculo actualizado correctamente")
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
