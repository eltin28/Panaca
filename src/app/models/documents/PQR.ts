import { EstadoPQR } from "../enums/EstadoPQR";
import { CategoriaPQR } from "../enums/CategoriaPQR";

export interface PQR {
  id: string;
  idUsuario: string;
  fechaCreacion: string;       // ISO date string
  estadoPQR: EstadoPQR;
  categoriaPQR: CategoriaPQR;
  descripcion: string;
  respuesta: string;
  fechaRespuesta: string;      // ISO date string
}
