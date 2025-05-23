import { categoriaPQR } from "../../enums/CategoriaPQR";

export interface CrearPQRDTO {
    idUsuario: string,
    categoriaPQR: categoriaPQR,
    descripcion: string,
}
