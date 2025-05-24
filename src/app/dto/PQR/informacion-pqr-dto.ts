import { CategoriaPQR } from "../../models/enums/CategoriaPQR";
import { EstadoPQR } from "../../models/enums/EstadoPQR";

export interface InformacionPQRDTO {
    id: string,
    nombreUsuario: string,
    telefonoUsuario: string,
    emailUsuario: string,
    fechaCreacion: string,
    estadoPQR: EstadoPQR,
    categoriaPQR: CategoriaPQR,
    descripcion: string,
    respuesta: string,
    fechaRespuesta: string
}
