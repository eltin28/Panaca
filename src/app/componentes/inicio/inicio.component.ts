import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, HeaderComponent, CarouselComponent, SearchBarComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  selectedDate: string = '';

  constructor() {}

  onDateChange(event: any) {
    this.selectedDate = event.target.value;
  }
}
