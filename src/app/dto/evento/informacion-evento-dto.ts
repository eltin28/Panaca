import { Localidad } from "./localidad"

export interface InformacionEventoDTO {
    id: string,
    imagenPortada: string,
    nombre: string,
    descripcion: string,
    direccion: string,
    imagenesLocalidades: string,
    tipoEvento: string,
    estadoEvento: string,
    fecha: Date,
    ciudad: string,
    listaLocalidades: Localidad[]
}
