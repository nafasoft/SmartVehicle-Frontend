import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registrese',
  templateUrl: './registrese.component.html',
  styleUrls: ['./registrese.component.css']
})
export class RegistreseComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'telefono': ['',[Validators.required]],
    'correo': ['',Validators.compose([Validators.required,Validators.email])]
  })

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, ) { }

  ngOnInit(): void {
  }

  CrearUsuario(){
    let u = new ModeloCliente();
    u.nombres = this.fgValidador.controls["nombres"].value;
    u.apellidos = this.fgValidador.controls["apellidos"].value;
    u.telefono = this.fgValidador.controls["telefono"].value;
    u.email = this.fgValidador.controls["correo"].value;
    u.estado = "activo";
    u.rol = "cliente";
    this.usuarioService.CrearCliente(u).subscribe((datos:ModeloCliente) =>{
      alert("Cuenta registrada correctamente, por favor revise su correo electronico.");
    },(error:any) =>{
      alert("Error almacenando sus datos, porfavor intente de nuevo.")
    })

    
    

  }

}
