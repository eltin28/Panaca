import { EstadoEvento } from "../../models/enums/EstadoEvento";
import { TipoEvento } from "../../models/enums/TipoEvento";

export interface EditarEventoDTO {
    nombre: string,
    descripcion: string,
    imagenPortada: string,
    estadoEvento: EstadoEvento,
    tipoEvento: TipoEvento,
    precio: number,
}
