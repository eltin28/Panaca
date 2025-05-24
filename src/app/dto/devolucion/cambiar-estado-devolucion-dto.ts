import { EstadoDevolucion } from "../../models/enums/EstadoDevolucion";

export interface CambiarEstadoDevolucionDTO {
    nuevoEstado: EstadoDevolucion;
}
