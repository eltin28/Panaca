import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './componentes/inicio/inicio.component';
// import { LoginComponent } from './componentes/login/login.component';
import { RegistroLoginComponent } from './componentes/registro-login/registro.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EventosComponent } from './componentes/eventos/eventos.component';


export const routes: Routes = [
   { path: '', component: InicioComponent },
   // { path: 'header', component: HeaderComponent},
   // { path: 'login', component: LoginComponent },
   { path: 'login', component: RegistroLoginComponent },
   { path: 'crear-evento', component: CrearEventoComponent },
   { path: 'eventos', component: EventosComponent},
   { path: "**", pathMatch: "full", redirectTo: "" }
];

