import { TipoDevolucion } from "../../enums/TipoDevolucion";

export interface DevolucionRequestDTO {
  cuentaId: string;
  tipo: TipoDevolucion;
  referenciaId: string;
}
