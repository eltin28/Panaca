import { EstadoEvento } from "../enums/EstadoEvento";
import { TipoEvento } from "../enums/TipoEvento";

export interface Evento {
  id: string;
  nombre: string;
  descripcion: string;
  imagenPortada: string;
  estado: EstadoEvento;
  tipo: TipoEvento;
  precio: number;
}
