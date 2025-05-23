import { TipoEvento } from "../../enums/TipoEvento";

export interface MostrarDetalleOrdenDTO {
  idEvento: string;
  nombreEvento: string;
  tipoEvento: TipoEvento;
  fechaUso: string;
  precio: number;
  cantidad: number;
}
