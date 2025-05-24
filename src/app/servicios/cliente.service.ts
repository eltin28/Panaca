import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { PQR } from '../models/documents/PQR';
import { Carrito } from '../models/documents/Carrito';
import { Cupon } from '../models/documents/Cupon';
import { DetalleCarritoDTO } from '../dto/carrito/detalle-carrito-dto';
import { EditarCuentaDTO } from '../dto/cuenta/editar-cuenta-dto';
import { InformacionCuentaDTO } from '../dto/cuenta/informacion-cuenta-dto';
import { InformacionEventoCarritoDTO } from '../dto/carrito/informacion-evento-carrito-dto';
import { MostrarOrdenDTO } from '../dto/orden/mostrar-orden-dto';
import { EditarOrdenDTO } from '../dto/orden/editar-orden-dto';
import { CrearPQRDTO } from '../dto/PQR/crear-pqr-dto';
import { ItemPQRDTO } from '../dto/PQR/item-pqr-dto';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';
import { DonationDTO } from '../dto/donation/donation-dto';
import { MostrarDonacionDTO } from '../dto/donation/mostrar-donacion-dto';
import { DevolucionRequestDTO } from '../dto/devolucion/devolucion-request-dto';
import { DevolucionResponseDTO } from '../dto/devolucion/devolucion-response-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private carritoURL = 'http://localhost:8081/api/cuenta';

  constructor(private http: HttpClient) { }

  //==================================== METODOS PERFIL =============================================//

  public editarPerfil(cuenta: EditarCuentaDTO): Observable<MensajeDTO<string>> {
  return this.http.put<MensajeDTO<string>>(`${this.carritoURL}/editar-perfil`, cuenta);
  }

  public eliminarCuenta(): Observable<MensajeDTO<string>> {
  return this.http.delete<MensajeDTO<string>>(`${this.carritoURL}/eliminar-cuenta`);
  }

  public obtenerInformacionCuenta(): Observable<MensajeDTO<InformacionCuentaDTO>> {
    return this.http.get<MensajeDTO<InformacionCuentaDTO>>(`${this.carritoURL}/obtener-informacion`);
  }

  //==================================== METODOS PQR =============================================//

  public crearPQR(pqr: CrearPQRDTO): Observable<MensajeDTO<string>> {
  return this.http.post<MensajeDTO<string>>(`${this.carritoURL}/crear-pqr`, pqr);
  }

  public listarPQRs(): Observable<MensajeDTO<ItemPQRDTO[]>> {
    return this.http.get<MensajeDTO<ItemPQRDTO[]>>(`${this.carritoURL}/listar-pqr`);
  }

  public obtenerPQRsPorUsuario(): Observable<MensajeDTO<PQR[]>> {
    return this.http.get<MensajeDTO<PQR[]>>(`${this.carritoURL}/obtener-pqr-usuario`);
  }

//==================================== METODOS CARRITO =============================================//

  public agregarItemsAlCarrito(items: DetalleCarritoDTO[]): Observable<MensajeDTO<string>> {
    return this.http.put<MensajeDTO<string>>(`${this.carritoURL}/agregar-items-carrito`, items);
  }

  public obtenerCarrito(): Observable<MensajeDTO<Carrito>> {
    return this.http.get<MensajeDTO<Carrito>>(`${this.carritoURL}/obtener-carrito`);
  }

  public eliminarItemDelCarrito(idEvento: string, fechaUso: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.carritoURL}/eliminar-item-carrito/${idEvento}/${fechaUso}`);
  }

  public vaciarCarrito(): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.carritoURL}/vaciar-carrito`);
  }

  public listarProductosEnCarrito(): Observable<MensajeDTO<InformacionEventoCarritoDTO[]>> {
    return this.http.get<MensajeDTO<InformacionEventoCarritoDTO[]>>(`${this.carritoURL}/listar-productos-carrito`);
  }

  public calcularTotalCarrito(): Observable<MensajeDTO<number>> {
    return this.http.get<MensajeDTO<number>>(`${this.carritoURL}/total-carrito`);
  }

//==================================== METODOS ORDEN =============================================//

  public crearOrdenDesdeCarrito(idCupon?: string, codigoPasarela?: string): Observable<MensajeDTO<string>> {
    let params = new HttpParams();
    if (idCupon) params = params.set("idCupon", idCupon);
    if (codigoPasarela) params = params.set("codigoPasarela", codigoPasarela);

    return this.http.post<MensajeDTO<string>>(`${this.carritoURL}/crear-orden`, null, { params });
  }

  public mostrarOrden(idOrden: string): Observable<MensajeDTO<MostrarOrdenDTO>> {
    return this.http.get<MensajeDTO<MostrarOrdenDTO>>(`${this.carritoURL}/mostrar-orden/${idOrden}`);
  }

  public actualizarOrden(id: string, orden: EditarOrdenDTO): Observable<MensajeDTO<string>> {
    return this.http.put<MensajeDTO<string>>(`${this.carritoURL}/actualizar-orden/${id}`, orden);
  }

  public eliminarOrden(id: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.carritoURL}/eliminar-orden/${id}`);
  }

  //==================================== METODOS PAGO =============================================//

  public realizarPago(idOrden: string): Observable<MensajeDTO<any>> {
  return this.http.post<MensajeDTO<any>>(
      `${this.carritoURL}/realizar-pago`,
      null,
      { params: { idOrden } }
    );
  }

  //==================================== METODOS DONACIONES =============================================//

  public crearDonacion(donacion: DonationDTO): Observable<MensajeDTO<string>> {
  return this.http.post<MensajeDTO<string>>(`${this.carritoURL}/donaciones-crear`, donacion);
  }

  public realizarPagoDonacion(idDonacion: string): Observable<MensajeDTO<any>> {
    return this.http.post<MensajeDTO<any>>(
      `${this.carritoURL}/realizar-pago-donacion`,
      null,
      { params: { idDonacion } }
    );
  }

  public obtenerHistorialDonaciones(): Observable<MensajeDTO<MostrarDonacionDTO[]>> {
    return this.http.get<MensajeDTO<MostrarDonacionDTO[]>>(`${this.carritoURL}/historial-donaciones`);
  }

  //==================================== METODOS DEVOLUCIONES =============================================//

  public solicitarDevolucion(dto: DevolucionRequestDTO): Observable<MensajeDTO<DevolucionResponseDTO>> {
    return this.http.post<MensajeDTO<DevolucionResponseDTO>>(`${this.carritoURL}/devoluciones-solicitar`, dto);
  }

  public listarDevolucionesUsuario(): Observable<MensajeDTO<DevolucionResponseDTO[]>> {
    return this.http.get<MensajeDTO<DevolucionResponseDTO[]>>(`${this.carritoURL}/devoluciones-historial`);
  }

  //==================================== METODOS CUPON =============================================//

  public aplicarCupon(codigo: string, fechaCompra: string): Observable<MensajeDTO<Cupon>> {
  const params = new HttpParams()
    .set('codigo', codigo)
    .set('fechaCompra', fechaCompra); // ISO format: "2025-05-24T12:00:00"

  return this.http.get<MensajeDTO<Cupon>>(`${this.carritoURL}/cupon/aplicar`, { params });
}

}