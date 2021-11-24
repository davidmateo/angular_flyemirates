import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { CambiarSesionComponent } from './cambiar-sesion/cambiar-sesion.component';
import { RecuperarSesionComponent } from './recuperar-sesion/recuperar-sesion.component';


@NgModule({
  declarations: [
    LoginComponent,
    CerrarSesionComponent,
    CambiarSesionComponent,
    RecuperarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
