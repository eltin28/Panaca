import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ClienteService } from '../../servicios/cliente.service';
import { TokenService } from '../../servicios/token.service';
import { InformacionEventoCarritoDTO } from '../../dto/carrito/informacion-evento-carrito-dto';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  items: InformacionEventoCarritoDTO[] = [];
  id: string = '';

  constructor(
    private clienteService: ClienteService,
    private tokenService: TokenService
  ) {
    this.id = this.tokenService.getAllTokenData().id;
    this.obtenerCarrito();
  }

  obtenerCarrito(): void {
    this.clienteService.listarProductosEnCarrito(this.id).subscribe({
      next: (data) => {
        this.items = data.respuesta;
      },
      error: (error) => {
        console.error('Error obteniendo carrito:', error);
      },
    });
  }

  eliminarItem(item: InformacionEventoCarritoDTO): void {
    this.clienteService.eliminarItem(item.detalleCarritoDTO.idEvento).subscribe({
      next: () => {
        this.items = this.items.filter(i =>
          i.detalleCarritoDTO.idEvento !== item.detalleCarritoDTO.idEvento ||
          i.detalleCarritoDTO.nombreLocalidad !== item.detalleCarritoDTO.nombreLocalidad
        );
      },
      error: (err) => console.error('Error eliminando ítem:', err)
    });
  }

  procesarCompra(): void {
    console.log('Procesando compra...');
    // Aquí iría el flujo de confirmación/pago
  }

  get totalItems(): number {
    return this.items.reduce((acc, item) => acc + item.detalleCarritoDTO.cantidad, 0);
  }

  trackByEvento(index: number, item: InformacionEventoCarritoDTO): string {
    return item.detalleCarritoDTO.idEvento;
  }
}
