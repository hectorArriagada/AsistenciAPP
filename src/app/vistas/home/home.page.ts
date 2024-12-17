import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  user = {
    username: '',
    password: '',
  };

  mensaje = '';
  spinner = false;

  constructor(private router: Router, private animationController: AnimationController) {}

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  ngAfterContentInit() {
  }

  animarLogin() {
    const loginIcon = document.querySelector(".logo") as HTMLElement;
    const animacion = this.animationController.create()
      .addElement(loginIcon)
      .duration(4000)
      .iterations(Infinity)
      .keyframes([
        {offset: 0, opacity: '1', width: "200px", height: "200px"},
        {offset: 0.5, opacity: '0.5', width: "150px", height: "150px"},
        {offset: 1, opacity: '1', width: "200px", height: "200px"},
      ]);
      animacion.play();
  }

  validar() {
    if (this.user.username.length != 0) {
      if (this.user.password.length != 0) {
        //funciona
        this.mensaje = 'Conexión Exitosa!';
        let navigationExtras: NavigationExtras = {
          state: {
            usuario: this.user.username,
            clave: this.user.password,
          },
        };

        this.cambiarSpinner();
        setTimeout(() => {
          this.router.navigate(['/home'], navigationExtras);
          this.cambiarSpinner();
          this.mensaje = "";
        }, 1);

      } else {
        this.mensaje = 'Contraseña vacía';
      }
      
    } else {
      this.mensaje = 'Usuario vacío';
    }
  }

  // async validar2() {
  //   try {
  //     const res = await this.auth.loginBD(this.user.username, this.user.password);
  //     if (res) {
  //       this.mensaje = 'Conexión Exitosa';
  //       let navigationExtras: NavigationExtras = {
  //         state: {
  //           user: this.user.username,
  //         },
  //       };
  //       if (res.categoria === 'profesor') {
  //         this.router.navigate(['/dash-profe'], navigationExtras);
  //       } else if (res.categoria === 'alumno') {
  //         this.router.navigate(['/dash-alumno'], navigationExtras);
  //       }
  //     } else {
  //       this.mensaje = 'Usuario o contraseña incorrectos';
  //     }
  //   } catch (error) {
  //     this.mensaje = 'Error en el sistema';
  //   }
  // }

  cambiarClave() {
    if (this.user.username.length != 0) {
      let navigationExtras: NavigationExtras = {
        state: {
          usuario: this.user.username,
        },
      };

      this.router.navigate(['/cambio-clave'], navigationExtras);

    } else {
      this.mensaje = 'Ingrese su usuario';
    }
  }

  ngOnInit() {
    this.animarLogin();
  }
}