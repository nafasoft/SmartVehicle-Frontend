import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000';

  constructor(private http: HttpClient ) { }

  CrearCliente(cliente: ModeloCliente):Observable<ModeloCliente>{
    return this.http.post<ModeloCliente>(`${this.url}/usuarios`, cliente,{
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }) 
    })
  }
}
