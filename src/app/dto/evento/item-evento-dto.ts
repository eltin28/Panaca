import { TipoEvento } from "../../models/enums/TipoEvento";

export interface ItemEventoDTO {
    id: string,
    nombre: string,
    descripcion: string,
    imagenPortada: string,
    tipoEvento: TipoEvento,
    precio: number
}
