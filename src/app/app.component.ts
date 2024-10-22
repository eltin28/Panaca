import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EventGridComponent } from './componentes/event-grid/event-grid.component';
import { FooterComponent } from "./componentes/footer/footer.component";
import { InicioComponent } from "./componentes/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, CarouselComponent, InicioComponent,FooterComponent,],
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
