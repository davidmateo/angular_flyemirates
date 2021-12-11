import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { rutaModelo } from '../modelos/rutas.model';
import { SeguridadService } from './seguridad.service';
@Injectable({
  providedIn: 'root'
})
export class RutaService {

  constructor(private http: HttpClient,
    private seguridadService: SeguridadService) { this.token = this.seguridadService.getToken();}
    url = "https://apilpteam5misiontic.herokuapp.com/"
    token: string = ''
    store(ruta: rutaModelo): Observable<rutaModelo> {
      return this.http.post<rutaModelo>(`${this.url}/rutas`, {
        tiempo_estimado: ruta.tiempo_estimado,
        origen: ruta.origen,
        destino: ruta.destino,
      });
    }
    getAll(): Observable<rutaModelo[]>{
      return this.http.get<rutaModelo[]>(`${this.url}/rutas`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    update(ruta: rutaModelo): Observable<rutaModelo> {
      return this.http.patch<rutaModelo>(`${this.url}/rutas/${ruta.id}`, {
        tiempo_estimado: ruta.tiempo_estimado,
        origen: ruta.origen,
        destino: ruta.destino
      }, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      });
    }
    delete(id: string): Observable<rutaModelo[]>{
      return this.http.delete<rutaModelo[]>(`${this.url}/rutas/${id}`, {
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }
    getWithId(id: string): Observable<rutaModelo>{
      return this.http.get<rutaModelo>(`${this.url}/rutas/${id}`,{
        headers: new HttpHeaders({
          "Authorization": `Bearer ${this.token}`
        })
      })
    }

}
