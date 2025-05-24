import { TipoCupon } from "../enums/TipoCupon";
import { EstadoCupon } from "../enums/EstadoCupon";

export interface Cupon {
  id: string;
  nombre: string;
  codigo: string;
  fechaVencimiento: string;    // ISO 8601 string, ejemplo: "2025-05-24T15:00:00"
  fechaApertura: string;
  descuento: number;
  tipo: TipoCupon;
  estado: EstadoCupon;
  utilizado: boolean;
}
