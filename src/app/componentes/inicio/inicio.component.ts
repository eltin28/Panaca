import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule],
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
