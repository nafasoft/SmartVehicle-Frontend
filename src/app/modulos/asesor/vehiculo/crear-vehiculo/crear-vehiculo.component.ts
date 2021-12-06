import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'marca': ['',[Validators.required]],
    'modelo': ['',[Validators.required]],
    'anio': ['',[Validators.required]],
    'valor': ['',[Validators.required]],
    'tipoDeOferta': ['',[Validators.required]],
    'fotografia': ['',[Validators.required]],
    'enlace': ['']
  });

  constructor(private fb: FormBuilder, private vehiculoServicio: VehiculoService, private router: Router) { }

  ngOnInit(): void {
  }

  GuardarVehiculo(){
    let v = new ModeloVehiculo();
    v.marca = this.fgValidador.controls["marca"].value;
    v.modelo = this.fgValidador.controls["modelo"].value;
    v.anio = this.fgValidador.controls["anio"].value;
    v.valor = this.fgValidador.controls["valor"].value;
    v.tipoDeOferta = this.fgValidador.controls["tipoDeOferta"].value;
    v.fotografia = this.fgValidador.controls["fotografia"].value;
    v.enlace = this.fgValidador.controls["enlace"].value;
    this.vehiculoServicio.CrearVehiculo(v).subscribe((datos: ModeloVehiculo) => {
      this.router.navigate(["/asesor/buscar-vehiculo"])
      alert("Vehiculo almacenado correctamente")
    },(error:any) => {
      alert("Error almacenando datos del vehiculo")
    })

  }

}
