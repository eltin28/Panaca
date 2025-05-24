import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';
import { CrearEventoDTO } from '../dto/evento/crear-evento-dto';
import { EditarEventoDTO } from '../dto/evento/editar-evento-dto';
import { CrearCuponDTO } from '../dto/cupon/crear-cupon-dto';
import { EditarCuponDTO } from '../dto/cupon/editar-cupon-dto';
import { ItemsCuponDTO } from '../dto/cupon/items-cupon-dto';
import { ResponderPQRDTO } from '../dto/PQR/responder-pqr-dto';
import { InformacionPQRDTO } from '../dto/PQR/informacion-pqr-dto';
import { ItemsCuponFiltroDTO } from '../dto/cupon/items-cupon-filtro-dto';
import { InformacionCuponDTO } from '../dto/cupon/informacion-cupon-dto';
import { DevolucionResponseDTO } from '../dto/devolucion/devolucion-response-dto'; 
import { CambiarEstadoDevolucionDTO } from '../dto/devolucion/cambiar-estado-devolucion-dto';
import { MostrarDonacionDTO } from '../dto/donation/mostrar-donacion-dto';

@Injectable({
 providedIn: 'root'
})
export class AdministradorService {

 private adminURL = "http://localhost:8081/api/admin";

 constructor(private http: HttpClient) { }

  //  _______________________________ METODOS EVENTOS _________________________________________________
  
  public crearEvento(evento: CrearEventoDTO): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.adminURL}/crear-evento`, evento);
  }

  public editarEvento(id: string, evento: EditarEventoDTO): Observable<MensajeDTO<string>> {
    return this.http.put<MensajeDTO<string>>(`${this.adminURL}/editar-evento/${id}`, evento);
  }

  public eliminarEvento(id: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.adminURL}/eliminar-evento/${id}`);
  }

  //==================================== METODOS PQR =============================================//

  public responderPQR(dto: ResponderPQRDTO): Observable<MensajeDTO<string>> {
    return this.http.put<MensajeDTO<string>>(`${this.adminURL}/responder-pqr`, dto);
  }

  public obtenerInformacionPQR(id: string): Observable<MensajeDTO<InformacionPQRDTO>> {
    return this.http.get<MensajeDTO<InformacionPQRDTO>>(`${this.adminURL}/obtener-informacion-pqr/${id}`);
  }

  public eliminarPQR(id: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.adminURL}/eliminar-pqr/${id}`);
  }

  //====================================== METODOS CUPON ====================================//

  public crearCupon(cupon: CrearCuponDTO): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.adminURL}/crear-cupon`, cupon);
  }

  public editarCupon(cuponId: string, cupon: EditarCuponDTO): Observable<MensajeDTO<string>> {
    return this.http.put<MensajeDTO<string>>(`${this.adminURL}/editar-cupon/${cuponId}`, cupon);
  }

  public eliminarCupon(id: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.adminURL}/eliminar-cupon/${id}`);
  }

  public obtenerInformacionCupon(id: string): Observable<InformacionCuponDTO> {
    return this.http.get<InformacionCuponDTO>(`${this.adminURL}/cupon/${id}`);
  }

  public filtrarCupones(filtro: ItemsCuponFiltroDTO): Observable<ItemsCuponDTO[]> {
    return this.http.post<ItemsCuponDTO[]>(`${this.adminURL}/filtrar-cupones`, filtro);
  }

  //  _______________________________ METODOS IMAGENES _________________________________________________

  public subir(imagen: FormData): Observable<MensajeDTO<string>> {
    return this.http.post<MensajeDTO<string>>(`${this.adminURL}/subir`, imagen);
  }

  public eliminar(idImagen: string): Observable<MensajeDTO<string>> {
    return this.http.delete<MensajeDTO<string>>(`${this.adminURL}/eliminar/${idImagen}`);
  }

  //==================================== METODOS DEVOLUCIONES =============================================/

  public listarTodasDevoluciones(): Observable<MensajeDTO<DevolucionResponseDTO[]>> {
    return this.http.get<MensajeDTO<DevolucionResponseDTO[]>>(`${this.adminURL}/devoluciones`);
  }

  public cambiarEstadoDevolucion(id: string, dto: CambiarEstadoDevolucionDTO): Observable<MensajeDTO<DevolucionResponseDTO>> {
    return this.http.put<MensajeDTO<DevolucionResponseDTO>>(`${this.adminURL}/devoluciones/${id}/estado`, dto);
  }

  //==================================== METODOS DONACIONES =============================================//

  public obtenerTodasLasDonaciones(): Observable<MensajeDTO<MostrarDonacionDTO[]>> {
    return this.http.get<MensajeDTO<MostrarDonacionDTO[]>>(`${this.adminURL}/historial-donaciones`);
  }

}
