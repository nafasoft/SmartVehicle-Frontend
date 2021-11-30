import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private _cargaScript:CargarScriptsService) { 
    _cargaScript.Carga(["validationForm"]);
  }

  ngOnInit(): void {
  }

}
