import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CarouselComponent],
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
