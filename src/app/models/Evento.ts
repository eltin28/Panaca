import { EstadoCupon } from "../enums/EstadoCupon";
import { TipoEvento } from "../enums/TipoEvento";

export interface Evento {
  id: string;
  imagenPortada: string;
  imagenLocalidad: string; // Corrige el nombre
  nombre: string;
  descripcion: string;
  direccion: string;
  ciudad: string;
  fecha: Date;
  tipoEvento: TipoEvento;
  estado: EstadoCupon;
  listaLocalidades: Localidad[];
}

export interface Localidad {
  nombre: string;
  capacidadMaxima: number;
  precio: number;
}
