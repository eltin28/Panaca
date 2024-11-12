import { CrearLocalidadDTO } from "./crear-localidad-dto";

export interface CrearEventoDTO {
    imagenPortada: string,
    imagenLocalidad: string,
    nombre: string,
    descripcion: string,
    direccion: string,
    tipoEvento: string,
    estadoEvento: string,
    fecha: Date,
    ciudad: string,
    listaLocalidades: CrearLocalidadDTO[]
}
