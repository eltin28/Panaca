import { Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrearEventoComponent } from './componentes/crear-evento/crear-evento.component';
import { HeaderComponent } from './componentes/header/header.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EventGridComponent } from './componentes/event-grid/event-grid.component';


export const routes: Routes = [
   { path: 'inicio', component: InicioComponent },
   { path: 'login', component: LoginComponent },
   { path: 'registro', component: RegistroComponent },
   { path: 'crear-evento', component: CrearEventoComponent },
   { path: 'header', component: HeaderComponent },
   { path: "**", pathMatch: "full", redirectTo: "" }
];

