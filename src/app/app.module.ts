import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Servicio de cargar scripts
import { CargarScriptsService } from './servicios/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ErrorComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CargarScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
