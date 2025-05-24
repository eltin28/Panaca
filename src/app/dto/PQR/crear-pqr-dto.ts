import { CategoriaPQR } from "../../models/enums/CategoriaPQR";

export interface CrearPQRDTO {
    idUsuario: string,
    categoriaPQR: CategoriaPQR,
    descripcion: string,
}
