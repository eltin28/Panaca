import { EstadoEvento } from "../../enums/EstadoEvento";
import { TipoEvento } from "../../enums/TipoEvento";

export interface EditarEventoDTO {
    nombre: string,
    descripcion: string,
    imagenPortada: string,
    estadoEvento: EstadoEvento,
    tipoEvento: TipoEvento,
    precio: number,
}
