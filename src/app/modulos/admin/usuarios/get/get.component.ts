import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { UsuarioModelo } from 'src/app/modelos/usuario.model';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor( private usuarioService: UsuarioService)
   { }
   //Debajo del constructor agregamos  la siguiente variable:
   listado: UsuarioModelo[] = []
   //Implementamos los metodos para traer informacion y eliminar informacion
   getAll(){
    this.usuarioService.getAll().subscribe((data: UsuarioModelo[]) => {
      this.listado = data
      console.log(data)
    })
  }
  delete(id?: any){
    console.log(id)
    Swal.fire({
      title: '¿Esta seguro de eliminar este registro?',
      showCancelButton: true,
      confirmButtonText: 'Acpetar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.delete(id).subscribe((data: any) => {
          Swal.fire('¡Eliminado correctamente!', '', 'success')
          this.getAll();
        })
      }
    })
  }
  ngOnInit(): void {
    this.getAll()
  }

}
