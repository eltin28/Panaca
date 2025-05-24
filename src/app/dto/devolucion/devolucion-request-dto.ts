import { TipoDevolucion } from "../../models/enums/TipoDevolucion";

export interface DevolucionRequestDTO {
  cuentaId: string;
  tipo: TipoDevolucion;
  referenciaId: string;
}
