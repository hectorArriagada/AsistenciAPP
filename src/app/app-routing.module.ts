import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./vistas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: () => import('./vistas/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./vistas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'dash-profe',
    loadChildren: () => import('./vistas/dash-profe/dash-profe.module').then( m => m.DashProfePageModule)
  },
  {
    path: 'dash-alumno',
    loadChildren: () => import('./vistas/dash-alumno/dash-alumno.module').then( m => m.DashAlumnoPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./vistas/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'registro-curso',
    loadChildren: () => import('./vistas/registro-curso/registro-curso.module').then( m => m.RegistroCursoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
