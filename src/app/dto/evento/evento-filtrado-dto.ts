import { EstadoEvento } from "../../enums/EstadoEvento";
import { TipoEvento } from "../../enums/TipoEvento";

export interface EventoFiltradoDTO {
    nombre: string,
    tipoEvento: TipoEvento,
    estadoEvento: EstadoEvento,
}
