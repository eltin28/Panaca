import { EstadoEvento } from "../../models/enums/EstadoEvento";
import { TipoEvento } from "../../models/enums/TipoEvento";

export interface CrearEventoDTO {
    nombre: string,
    descripcion: string,
    imagenPortada: string,
    estado: EstadoEvento
    tipo: TipoEvento,
    precio: number,
}
