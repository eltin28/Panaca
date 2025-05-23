import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActualizarCarritoDTO } from '../dto/carrito/actualizar-carrito-dto';
import { DetalleCarritoDTO } from '../dto/carrito/detalle-carrito-dto';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private carritoURL = 'http://localhost:8081/api/cuenta';

  constructor(private http: HttpClient) { }

  /**
   * Obtener los items del carrito del usuario actual
   */
  public listarProductosEnCarrito(idUsuario : string): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.carritoURL}/listar-productos-carrito/${idUsuario}`);
  }

  /**
   * Actualiza los items del carrito (por ejemplo, cambio de cantidad o localidades)
   * @param carritoDTO contiene los items actualizados y la fecha
   */
  public actualizarCarrito(carritoDTO: ActualizarCarritoDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.carritoURL}/actualizar`, carritoDTO);
  }

  /**
   * Elimina un item del carrito según el ID del evento
   * @param idEvento ID del evento a eliminar del carrito
   */
  public eliminarItem(idEvento: string): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.carritoURL}/eliminar/${idEvento}`);
  }

  /**
   * Limpia completamente el carrito
   */
  public vaciarCarrito(): Observable<MensajeDTO> {
    return this.http.delete<MensajeDTO>(`${this.carritoURL}/vaciar`);
  }

  agregarItemsAlCarrito(idUsuario: string, itemsCarritoDTO: DetalleCarritoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.carritoURL}/agregar-items-carrito/${idUsuario}`, itemsCarritoDTO);
  }
  
}