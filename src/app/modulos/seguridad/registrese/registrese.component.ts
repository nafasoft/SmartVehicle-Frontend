import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/servicios/cargar-scripts.service';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {

  constructor(private _cargaScript:CargarScriptsService) { 
    _cargaScript.Carga(["validationForm"]);
  }

  ngOnInit(): void {
  }

}
