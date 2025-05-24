import { EstadoDevolucion } from "../../models/enums/EstadoDevolucion";
import { TipoDevolucion } from "../../models/enums/TipoDevolucion";

export interface DevolucionResponseDTO {
  id: string;
  tipo: TipoDevolucion;
  referenciaId: string;
  fechaSolicitud: string
  estado: EstadoDevolucion;
}