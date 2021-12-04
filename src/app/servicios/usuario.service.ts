//En la parte superior importamos las siguientes librerías:
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
import { UsuarioModelo } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
  
})
export class UsuarioService {
  //Dentro de los paréntesis del constructor agregamos las siguientes variables:
  //private http: HttpClient,
  //private seguridadService: SeguridadService
  //Dentro de las llaves del constructor agregamos la siguiente instrucción:
  //this.token = this.seguridadService.getToken(); 
  constructor
  (private http: HttpClient,  private seguridadService: SeguridadService) 
    { this.token = this.seguridadService.getToken();
    console.log(this.token) }
    //Debajo del constructor agregamos las variables globales de la clase:
    url = "http://localhost:3000"
    token: string = ''
    //Implementamos los métodos necesarios para realizar las acciones del CRUD,
    // debajo del constructor
//Método para Crear un Usuario:
  store(usuario: UsuarioModelo): Observable<UsuarioModelo> {
    return this.http.post<UsuarioModelo>(`${this.url}/usuarios`, {
        nombre: usuario.nombre,
        apellido: usuario.apellidos,
        telefono: usuario.telefono,
        correo: usuario.correo
      });
    }
    //Método para Listar todos los Usuarios:
  getAll(): Observable<UsuarioModelo[]>{
      return this.http.get<UsuarioModelo[]>(`${this.url}/usuarios`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
  //Método para Actualizar un Usuario:
  update(usuario: UsuarioModelo): Observable<UsuarioModelo> {
      return this.http.patch<UsuarioModelo>(`${this.url}/usuarios/${usuario.id}`, {
        nombre: usuario.nombre,
        apellido: usuario.apellidos,
        telefono: usuario.telefono,
        correo: usuario.correo
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    //Método para Eliminar un Usuario: 
    delete(id: string): Observable<UsuarioModelo[]>{
      return this.http.delete<UsuarioModelo[]>(`${this.url}/usuarios/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Metodo para Consultar un unico Usuario: 
    getWithId(id: string): Observable<UsuarioModelo>{
      return this.http.get<UsuarioModelo>(`${this.url}/usuarios/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }



}
