import { EstadoEvento } from "../../models/enums/EstadoEvento";
import { TipoEvento } from "../../models/enums/TipoEvento";

export interface EventoFiltradoDTO {
    nombre: string,
    tipoEvento: TipoEvento,
    estadoEvento: EstadoEvento,
}
