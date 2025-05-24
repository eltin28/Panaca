import { EstadoPQR } from "../../models/enums/EstadoPQR";

export interface ItemPQRDTO {
    id: string,
    idUsuario: string,
    estadoPQR: EstadoPQR,
    fechaCreacion: string
}
