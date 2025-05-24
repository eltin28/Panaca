import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';
import { Observable } from 'rxjs';
import { EventoFiltradoDTO } from '../dto/evento/evento-filtrado-dto';
import { ItemEventoDTO } from '../dto/evento/item-evento-dto';
import { Evento } from '../models/documents/Evento';

@Injectable({
 providedIn: 'root'
})
export class PublicoService {

 private publicoURL = "http://localhost:8081/api/publico";

 constructor(private http: HttpClient) { }

  //_______________________________ METODOS EVENTO _____________________________________________

  public filtrarEventos(filtroEventoDTO: EventoFiltradoDTO): Observable<MensajeDTO<EventoFiltradoDTO[]>> {
    return this.http.post<MensajeDTO<EventoFiltradoDTO[]>>(`${this.publicoURL}/filtrar-eventos`, filtroEventoDTO);
  }

  public listarEventos(): Observable<MensajeDTO<ItemEventoDTO[]>> {
    return this.http.get<MensajeDTO<ItemEventoDTO[]>>(`${this.publicoURL}/listar-eventos`);
  }
  
  public obtenerEvento(id: string): Observable<Evento> {
    return this.http.get<Evento>(`${this.publicoURL}/obtener-evento/${id}`);
  }
}