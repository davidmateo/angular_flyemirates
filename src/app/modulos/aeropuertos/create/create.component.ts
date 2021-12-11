import { Component, OnInit } from '@angular/core';
import { AeropuertoService } from 'src/app/servicios/aeropuerto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { aeropuertoModelo } from 'src/app/modelos/aeropuertos.model';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private aeropuertoService: AeropuertoService,
    private router: Router) { }
    fgValidacion = this.fb.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      coord_x: ['', [Validators.required]],
      coord_y: ['', [Validators.required]],
      siglas: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  ngOnInit(): void {
  }
  store(){
    let aeropuertos = new aeropuertoModelo();
    aeropuertos.nombre = this.fgValidacion.controls["nombre"].value;
    aeropuertos.ciudad = this.fgValidacion.controls["ciudad"].value;
    aeropuertos.pais = this.fgValidacion.controls["pais"].value;
    aeropuertos.coord_x = this.fgValidacion.controls["coord_x"].value;
    aeropuertos.coord_y = this.fgValidacion.controls["coord_y"].value;
    aeropuertos.siglas = this.fgValidacion.controls["siglas"].value;
    aeropuertos.tipo = this.fgValidacion.controls["tipo"].value;
 
    this.aeropuertoService.store(aeropuertos).subscribe((data: aeropuertoModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/aeropuertos/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }

}
