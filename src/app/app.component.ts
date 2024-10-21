import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { SearchBarComponent } from './componentes/search-bar/search-bar.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { EventGridComponent } from './componentes/event-grid/event-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,HeaderComponent,SearchBarComponent,CarouselComponent,EventGridComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'UniEventos-Front';
  footer = 'Universidad del Quindío - 2024-2';

  selectedDate: string = '';

  constructor() {}

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }

}
