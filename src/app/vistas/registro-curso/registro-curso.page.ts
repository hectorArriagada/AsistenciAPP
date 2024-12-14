import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import { CursoI } from 'src/app/servicios/modelos';

@Component({
  selector: 'app-registro-curso',
  templateUrl: './registro-curso.page.html',
  styleUrls: ['./registro-curso.page.scss'],
})
export class RegistroCursoPage implements OnInit {

  newCourse: CursoI;

  constructor( private firestore: FirestoreService) {
    this.initCurso();
  }


  initCurso() {
    this.newCourse = {
      nombre: '',
      descripcion: '',
      fechaInicio: '',
      fechaFin: '',
      idCurso: ''
    }
  }

  crearCurso() {
    this.newCourse.idCurso = this.firestore.generarID();
    this.firestore.createDocumentID(this.newCourse, 'Cursos', this.newCourse.idCurso);
  }


  ngOnInit() {
  }

}
