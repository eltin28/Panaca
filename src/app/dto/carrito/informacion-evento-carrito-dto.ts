import { DetalleCarritoDTO } from "./detalle-carrito-dto";

export interface InformacionEventoCarritoDTO {
    detalleCarritoDTO: DetalleCarritoDTO,
    imagenPortada: String,
    nombre: String,
    direccion: String,
    fecha: Date,
}
