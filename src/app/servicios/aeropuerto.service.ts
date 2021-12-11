import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeguridadService } from './seguridad.service';
import { aeropuertoModelo } from '../modelos/aeropuertos.model';
@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(
    private http: HttpClient,
    private seguridadService: SeguridadService) 
    {this.token = this.seguridadService.getToken(); }
   //Debajo del constructor agregamos las variables globales de la clase:
    url = "https://apilpteam5misiontic.herokuapp.com/"
    token: string = ''
        //Implementamos los métodos necesarios para realizar las acciones del CRUD,
    // debajo del constructor
//Método para Crear un Aeropuerto:
  store(aeropuertos: aeropuertoModelo): Observable<aeropuertoModelo> {
       return this.http.post<aeropuertoModelo>(`${this.url}/aeropuertos`, {
        nombre:aeropuertos.nombre,
        ciudad:aeropuertos.ciudad,
        pais:aeropuertos.pais,
        coord_x:aeropuertos.coord_x,
        coord_y:aeropuertos.coord_y,
        siglas:aeropuertos.siglas,
        tipo:aeropuertos.tipo
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    //Método para listar un Aeropuerto:
  getAll(): Observable<aeropuertoModelo[]>{
      return this.http.get<aeropuertoModelo[]>(`${this.url}/aeropuertos`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //metodo para actualizar un aeropuerto
   update(aeropuertos: aeropuertoModelo): Observable<aeropuertoModelo> {
      return this.http.patch<aeropuertoModelo>(`${this.url}/aeropuertos/${aeropuertos.id}`, {
        nombre:aeropuertos.nombre,
        ciudad:aeropuertos.ciudad,
        pais:aeropuertos.pais,
        coord_x:aeropuertos.coord_x,
        coord_y:aeropuertos.coord_y,
        siglas:aeropuertos.siglas,
        tipo:aeropuertos.tipo
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    
    }
    //Método para Eliminar  
delete(id: string): Observable<aeropuertoModelo[]>{
      return this.http.delete<aeropuertoModelo[]>(`${this.url}/aeropuertos/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    //Metodo para Consultar un unico Usuario: 
getWithId(id: string): Observable<aeropuertoModelo>{
      return this.http.get<aeropuertoModelo>(`${this.url}/aeropuertos/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }



}
