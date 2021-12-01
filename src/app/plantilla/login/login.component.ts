import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _cargaScript:CargarScriptsService) { 
    _cargaScript.Carga(["validationForm"]);
  }

  ngOnInit(): void {
  }

}
