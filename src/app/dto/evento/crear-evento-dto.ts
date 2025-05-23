import { EstadoEvento } from "../../enums/EstadoEvento";
import { TipoEvento } from "../../enums/TipoEvento";

export interface CrearEventoDTO {
    nombre: string,
    descripcion: string,
    imagenPortada: string,
    estado: EstadoEvento
    tipo: TipoEvento,
    precio: number,
}
