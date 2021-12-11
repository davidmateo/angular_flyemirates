import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/servicios/ruta.service';
import { rutaModelo } from 'src/app/modelos/rutas.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private rutaService: RutaService) { }
  listado: rutaModelo[] = []
  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.rutaService.getAll().subscribe((data: rutaModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }
   
  delete(id?: any){
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rutaService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }


}
