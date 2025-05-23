import { EstadoCupon } from "../../enums/EstadoCupon";
import { TipoCupon } from "../../enums/TipoCupon";

export interface CrearCuponDTO {
    codigo: string,
    nombre: string,
    porcentajeDescuento: number,
    fechaVencimiento: string,
    fechaApertura: string,
    tipoCupon: TipoCupon,
    estadoCupon: EstadoCupon
}
