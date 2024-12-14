import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  newUser = {
    usuario: '',
    clave: '',
    tipoUsuario: '',
    idUsuario: '',
  }

  constructor(private router: Router, 
    private toastController: ToastController,
    private firestore: FirestoreService) {}

registrar() {
    // try {
    this.newUser.idUsuario = this.firestore.generarID();
    this.firestore.createDocumentID(this.newUser, 'Usuarios', this.newUser.idUsuario);
    this.router.navigate(['/home']);
    //   const toast = await this.toastController.create({
    //     message: res ? 'Registrado con exito' : 'Error al registrar',
    //     duration: 3000,
    //     position: 'bottom',
    //   });
    //   toast.present();
    // } catch (error) {
    //   const toast = await this.toastController.create({
    //     message: 'Error al registrar',
    //     duration: 3000,
    //     position: 'bottom',
    //   });
    //   toast.present();
    // }
  }



  ngOnInit() {}

}
