import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as cryptoJS from 'crypto-js';
//importamos seguridad service
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fgValidacion = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required,Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,private seguridadService: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {
  }
  identificarUsuario() {
    let usuario = this.fgValidacion.controls["correo"].value;
    let clave = this.fgValidacion.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
//el metodo observable se de llamar por medio de un suscribe
    this.seguridadService.login(usuario, claveCifrada).subscribe(
      (data: any) => {
        this.seguridadService.almacenarSesion(data)
        //el router.navigate me permite mover dentro componentes
        this.router.navigate(['/index']);
      },
      (error: any) => {
        console.log(error)
        alert("Datos inválidos");
      }
      );
    }
}
