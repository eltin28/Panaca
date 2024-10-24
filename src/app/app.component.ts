import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { FooterComponent } from "./componentes/footer/footer.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";
import { NavbarComponent } from './componentes/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, SearchBarComponent, CarouselComponent, InicioComponent,FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UniEventos-Front';

  selectedDate: string = '';

  constructor() {}

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }

}
