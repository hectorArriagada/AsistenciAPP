import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { CursoI, UserI } from 'src/app/servicios/modelos';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  users: UserI[] = [];
  cursos: CursoI[] = [];
  newUser: UserI;
  newCourse: CursoI;
  
  constructor(
    private firestore: FirestoreService,
    private router: Router) {
      this.loadUsers();
      this.loadCourses();
      this.initUser();
  }

  loadUsers() {
    this.firestore.getCollectionChanges<UserI>('Usuarios').subscribe( data => {
      if (data) {
        this.users = data
      }
    });
  }
  
  loadCourses() {
    this.firestore.getCollectionChanges<CursoI>('Cursos').subscribe( data => {
      if (data) {
        this.cursos = data
      }
    });
  }

  initUser() {
    this.newUser = {
      usuario: '',
      clave: '',
      tipoUsuario: '',
      idUsuario: ''
    }
  }

  initCourse() {
    this.newCourse = {
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      idCurso: ''
    }
  }

  modificar(user: UserI) {
    this.newUser = user;
  }

  eliminar(user: UserI) {
    this.firestore.deleteDocumentID('Usuarios', user.idUsuario);
  }

  update(curso: CursoI) {
    this.newCourse = curso;
  }

  delete(curso: CursoI) {
    this.firestore.deleteDocumentID('Cursos', curso.idCurso);
  }





  ngOnInit() {
  }

}
