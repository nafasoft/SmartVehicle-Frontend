import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificar-usuario`, {
      usuario: usuario,
      password: clave
    },{
      headers: new HttpHeaders({

      })
    })
  
  }

  AlmacenarSesion(datos: ModeloIdentificar){
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos)
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
    }
  }

  EliminarInformacionSession(){
    localStorage.removeItem("datosSesion")
  }




}

