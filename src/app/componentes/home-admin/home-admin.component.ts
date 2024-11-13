import { Component,OnInit } from '@angular/core';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";

@Component({
  selector: 'app-home-admin',
  standalone: true,
  imports: [NavbarAdminComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent implements OnInit {
  totalEventos: number = 120;  // Datos de ejemplo
  totalCupones: number = 350;  // Datos de ejemplo

  constructor() { }

  ngOnInit(): void {
    // Aquí podrías obtener los datos desde un servicio o API
  }
}