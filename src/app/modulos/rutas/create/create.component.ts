import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { rutaModelo } from 'src/app/modelos/rutas.model';
import { RutaService } from 'src/app/servicios/ruta.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private rutaService: RutaService,
    private router: Router) { }
    fgValidacion = this.fb.group({
      tiempo_estimado: ['', [Validators.required]],
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
    });
  
  ngOnInit(): void {
  }
  store(){
    let ruta = new rutaModelo();
    ruta.tiempo_estimado = this.fgValidacion.controls["tiempo_estimado"].value;
    ruta.origen = this.fgValidacion.controls["origen"].value;
    ruta.destino = this.fgValidacion.controls["destino"].value;
 
    this.rutaService.store(ruta).subscribe((data: rutaModelo)=> {
      Swal.fire('Creado correctamente!', '', 'success')
      this.router.navigate(['/rutas/get']);
    },
    (error: any) => {
      console.log(error)
      alert("Error en el envio");
    })
  }


}
