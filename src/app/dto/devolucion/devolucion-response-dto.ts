import { EstadoDevolucion } from "../../enums/EstadoDevolucion";
import { TipoDevolucion } from "../../enums/TipoDevolucion";

export interface DevolucionResponseDTO {
  id: string;
  tipo: TipoDevolucion;
  referenciaId: string;
  fechaSolicitud: string
  estado: EstadoDevolucion;
}