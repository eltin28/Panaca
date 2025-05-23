import { DetalleOrdenDTO } from "./detalle-orden-dto";

export interface EditarOrdenDTO {
    id: string,
    codigoCupon: string,
    detalleOrden: DetalleOrdenDTO[],
}
