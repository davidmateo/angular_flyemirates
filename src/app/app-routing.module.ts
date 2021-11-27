import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './assets/error/error.component';
import { IndexComponent } from './assets/index/index.component';
//erutamientos 
const routes: Routes = [
  //si el path es index me cargar el componente index
  {
    path: 'index',
    component: IndexComponent,
  },
  //metodos pere
  //si el path es aeropuertos el padre me mandara a donde su hijo aeropuertos para que el
  //me muestre lo que le que solicite
  {
    path: 'aeropuertos',
    loadChildren: () => import('./modulos/aeropuertos/aeropuertos.module').then(m => m.AeropuertosModule)
  },
  {
    path: 'vuelos',
    loadChildren: () => import('./modulos/vuelos/vuelos.module').then(m => m.VuelosModule)
  },
  {
    path: 'rutas',
    loadChildren: () => import('./modulos/rutas/rutas.module').then(m => m.RutasModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./modulos/seguridad/seguridad.module').then(m => m.SeguridadModule)
  },{
    path: 'admin',
    loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule)
  },{
    path: 'estaciones',
    loadChildren: () => import('./modulos/estaciones/estaciones.module').then(m => m.EstacionesModule)
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'error',
    component: ErrorComponent,
  },{
    path: '**',
    redirectTo: '/error'
  }

];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }