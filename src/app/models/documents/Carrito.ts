import { DetalleCarrito } from "../VO/DetalleCarrito";

export interface Carrito {
  id: string;
  idUsuario: string;
  items: DetalleCarrito[];
}
