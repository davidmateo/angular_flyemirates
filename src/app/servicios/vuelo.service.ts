import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SeguridadService } from './seguridad.service';
import { Observable } from 'rxjs';
import { UsuarioModelo } from '../modelos/usuario.model';
import { vueloModelo } from '../modelos/vuelos.model';
@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) {  this.token = this.seguridadService.getToken(); }
    url = "https://apilpteam5misiontic.herokuapp.com/"
    token: string = ''
    store(vuelo: vueloModelo): Observable<vueloModelo> {
      return this.http.post<vueloModelo>(`${this.url}/vuelos`, {
        fecha_inicio: vuelo.fecha_inicio,
        hora_inicio: vuelo.hora_inicio,
        fecha_fin: vuelo.fecha_fin,
        hora_fin: vuelo.hora_fin,
        asientos: vuelo.asientos,
        vendidos: vuelo.vendidos,
        nombre_piloto: vuelo.nombre_piloto,
        ruta: vuelo.ruta,
      },{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    getAll(): Observable<vueloModelo[]>{
      return this.http.get<vueloModelo[]>(`${this.url}/vuelos`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    update(vuelo: vueloModelo): Observable<vueloModelo> {
      return this.http.patch<vueloModelo>(`${this.url}/vuelos/${vuelo.id}`, {
        fecha_inicio: vuelo.fecha_inicio,
        hora_inicio: vuelo.hora_inicio,
        fecha_fin: vuelo.fecha_fin,
        hora_fin: vuelo.hora_fin,
        asientos:vuelo.asientos,
        vendidos:vuelo.vendidos,
        nombre_piloto:vuelo.nombre_piloto,
        ruta:vuelo.ruta
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    delete(id: string): Observable<vueloModelo[]>{
      return this.http.delete<vueloModelo[]>(`${this.url}/vuelos/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    getWithId(id: string): Observable<vueloModelo>{
      return this.http.get<vueloModelo>(`${this.url}/vuelos/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }




}
