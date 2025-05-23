import { categoriaPQR } from "../../enums/CategoriaPQR";

export interface InformacionPQRDTO {
    id: string,
    nombreUsuario: string,
    telefonoUsuario: string,
    emailUsuario: string,
    fechaCreacion: string,
    /*estadoPQR: ,*/
    categoriaPQR: categoriaPQR,
    descripcion: string,
    respuesta: string,
    fechaRespuesta: string
}
