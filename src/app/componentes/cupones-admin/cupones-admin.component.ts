import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarAdminComponent } from "../navbar-admin/navbar-admin.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-cupones-admin',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarAdminComponent, NgxPaginationModule],
  templateUrl: './cupones-admin.component.html',
  styleUrl: './cupones-admin.component.css'
})
export class CuponesAdminComponent implements OnInit {
  availablePage: number = 1;   // Página de cupones disponibles
  unavailablePage: number = 1; // Página de cupones no disponibles

  availableCoupons = [
      { id: 1, title: 'Cupón de Verano', code: 'SUMMER2024', discount: 20, expiration: '2024-08-30', image: 'cupon_verano.jpg' },
      { id: 2, title: 'Cupón de Otoño', code: 'FALL2024', discount: 15, expiration: '2024-09-15', image: 'cupon_otonio.jpg' },
      // Agrega más cupones disponibles aquí...
  ];

  unavailableCoupons = [
      { id: 3, title: 'Cupón de Invierno', code: 'WINTER2023', discount: 25, expiration: '2023-12-31', image: 'cupon_invierno.jpg' },
      { id: 4, title: 'Cupón de Primavera', code: 'SPRING2023', discount: 10, expiration: '2023-03-20', image: 'cupon_primavera.jpg' },
      // Agrega más cupones no disponibles aquí...
  ];

  constructor() {}

  ngOnInit(): void {}

  // Métodos de paginación para cupones disponibles
  prevAvailablePage(): void {
      if (this.availablePage > 1) {
          this.availablePage--;
      }
  }

  nextAvailablePage(): void {
      if (this.availablePage < this.maxAvailablePage()) {
          this.availablePage++;
      }
  }

  maxAvailablePage(): number {
      return Math.ceil(this.availableCoupons.length / 5);
  }

  // Métodos de paginación para cupones no disponibles
  prevUnavailablePage(): void {
      if (this.unavailablePage > 1) {
          this.unavailablePage--;
      }
  }

  nextUnavailablePage(): void {
      if (this.unavailablePage < this.maxUnavailablePage()) {
          this.unavailablePage++;
      }
  }

  maxUnavailablePage(): number {
      return Math.ceil(this.unavailableCoupons.length / 5);
  }
}
