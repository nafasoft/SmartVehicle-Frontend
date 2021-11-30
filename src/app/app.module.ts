import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Servicio de cargar scripts
import { CargarScriptsService } from './cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { RegistreseComponent } from './plantilla/registrese/registrese.component';
import { LoginComponent } from './plantilla/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    ContactoComponent,
    RegistreseComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
