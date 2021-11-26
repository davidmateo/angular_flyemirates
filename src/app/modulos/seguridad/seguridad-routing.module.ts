import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambiarSesionComponent } from './cambiar-sesion/cambiar-sesion.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RecuperarSesionComponent } from './recuperar-sesion/recuperar-sesion.component';
//routing solicitados por el padre 
const routes: Routes =
 [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: CerrarSesionComponent,
  },
  {
    path: "retrieve",
    component: RecuperarSesionComponent,
  },
  {
    path:'change',
    component:CambiarSesionComponent,
  },
  {
    path: '',
    redirectTo: 'login'
  }

 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
