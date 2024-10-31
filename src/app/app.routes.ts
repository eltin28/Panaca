import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroLoginComponent } from './componentes/registro-login/registro.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { HeaderComponent } from './componentes/header/header.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EventoUnidadComponent } from './componentes/evento-unidad/evento-unidad.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CambioContrasenaComponent } from './componentes/cambio-contrasena/cambio-contrasena.component'


export const routes: Routes = [
   { path: '', component: InicioComponent },
   { path: 'login', component: RegistroLoginComponent },
   { path: 'crear-evento', component: CrearEventoComponent },
   { path: 'eventos', component: EventosComponent },
   { path: 'evento', component: EventoUnidadComponent },
   { path: 'carrito', component: CarritoComponent },
   { path: 'cambio-contrasena', component: CambioContrasenaComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

