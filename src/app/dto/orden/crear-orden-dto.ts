import { DetalleOrdenDTO } from "./detalle-orden-dto"

export interface CrearOrdenDTO {
    idCliente: string,
    codigoCupon: string,
    codigoPasarela: string,
    fecha: string,
    detalleOrden: DetalleOrdenDTO[],
}
