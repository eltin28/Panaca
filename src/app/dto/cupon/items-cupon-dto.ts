import { EstadoCupon } from "../../models/enums/EstadoCupon";
import { TipoCupon } from "../../models/enums/TipoCupon";

export interface ItemsCuponDTO {
    nombre: string,
    fechaVencimiento: string,
    fechaApertura: string,
    descuento: number,
    tipo: TipoCupon,
    estado: EstadoCupon
}