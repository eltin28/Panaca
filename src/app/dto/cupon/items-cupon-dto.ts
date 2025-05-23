import { EstadoCupon } from "../../enums/EstadoCupon";
import { TipoCupon } from "../../enums/TipoCupon";

export interface ItemsCuponDTO {
    nombre: string,
    fechaVencimiento: string,
    fechaApertura: string,
    descuento: number,
    tipo: TipoCupon,
    estado: EstadoCupon
}