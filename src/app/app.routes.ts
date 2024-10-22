import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { HeaderComponent } from './componentes/header/header.component';

export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'header', component: HeaderComponent},
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'crear-evento', component: CrearEventoComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

