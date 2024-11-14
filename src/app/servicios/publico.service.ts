import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';
import { Observable } from 'rxjs';


@Injectable({
 providedIn: 'root'
})
export class PublicoService {


 private publicoURL = "http://localhost:8081/api/publicos";


 constructor(private http: HttpClient) { }

  //_______________________________ METODOS EVENTO _____________________________________________


 public listarCiudades(): Observable<MensajeDTO> {
   return this.http.get<MensajeDTO>(`${this.publicoURL}/filtrar-eventos`);
 }


 public listarEventos(): Observable<MensajeDTO> {
   return this.http.get<MensajeDTO>(`${this.publicoURL}/listar-eventos`);
 }

}
