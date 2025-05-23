import { ItemDonacionDTO } from "./item-donacion-dto";

export interface MostrarDonacionDTO {
    id: string;
    fecha: string;
    total: number;
    items: ItemDonacionDTO[];
}
