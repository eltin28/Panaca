import { EstadoCupon } from "../../models/enums/EstadoCupon";
import { TipoCupon } from "../../models/enums/TipoCupon";

export interface InformacionCuponDTO {
    codigo: string,
    nombre: string,
    porcentajeDescuento: number,
    fechaVencimiento: string,
    fechaApertura: string,
    tipoCupon: TipoCupon,
    estadoCupon: EstadoCupon
}
