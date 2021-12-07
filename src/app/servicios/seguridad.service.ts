import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  datosUsuarioEnsesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar())

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }

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
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
    }else{
      return null;
    }

  }

  EliminarInformacionSession(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      return datosString; 
    } else {
      return null;
    }
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos)
    }
  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuarioEnsesion.asObservable();
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuarioEnsesion.next(datos);
  }

  ObtenerToken(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    } else{
      return '';
    }
  }
}

