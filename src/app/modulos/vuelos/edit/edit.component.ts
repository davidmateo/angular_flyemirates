import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModelo } from 'src/app/modelos/usuario.model';
import { vueloModelo } from 'src/app/modelos/vuelos.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { VueloService } from 'src/app/servicios/vuelo.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private vueloservice:VueloService ,
    private router: Router,
    private route: ActivatedRoute) { }
    fgValidacion = this.fb.group({
      id: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      hora_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      hora_fin: ['', [Validators.required]],
      asientos: ['', [Validators.required]],
      vendidos: ['', [Validators.required]],
      nombre_piloto: ['', [Validators.required]],
      ruta: ['', [Validators.required]]
    });
    buscarRegistro(id: string){
      this.vueloservice.getWithId(id).subscribe((data: vueloModelo) => {
        console.log(data)
        this.fgValidacion.controls["id"].setValue(id)
        this.fgValidacion.controls["fecha_inicio"].setValue(data.fecha_inicio)
        this.fgValidacion.controls["hora_inicio"].setValue(data.hora_inicio)
        this.fgValidacion.controls["fecha_fin"].setValue(data.fecha_fin)
        this.fgValidacion.controls["hora_fin"].setValue(data.hora_fin)
        this.fgValidacion.controls["asientos"].setValue(data.asientos)
        this.fgValidacion.controls["vendidos"].setValue(data.vendidos)
        this.fgValidacion.controls["nombre_piloto"].setValue(data.nombre_piloto)
        this.fgValidacion.controls["ruta"].setValue(data.ruta)
        
      })
    }
    edit(){
      let vuelo = new vueloModelo();
      vuelo.id = this.fgValidacion.controls["id"].value;
      vuelo.fecha_inicio = this.fgValidacion.controls["fecha_inicio"].value;
      vuelo.hora_inicio = this.fgValidacion.controls["hora_inicio"].value;
      vuelo.fecha_fin = this.fgValidacion.controls["fecha_fin"].value;
      vuelo.hora_fin = this.fgValidacion.controls["hora_fin"].value;
      vuelo.asientos = this.fgValidacion.controls["asientos"].value;
      vuelo.vendidos = this.fgValidacion.controls["vendidos"].value;
      vuelo.nombre_piloto = this.fgValidacion.controls["nombre_piloto"].value;
      vuelo.ruta = this.fgValidacion.controls["ruta"].value;
   
      this.vueloservice.update(vuelo).subscribe((data: vueloModelo)=> {
        Swal.fire('Editado Correctamente!', '', 'success')
        this.router.navigate(['/vuelos/get/']);
      },
      (error: any) => {
        console.log(error)
        alert("Error en el envio");
      })
    }
    id: string=''
  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"]
    this.buscarRegistro(this.id);
  }

}

