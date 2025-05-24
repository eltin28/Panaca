import { AnimalType } from "../../models/enums/AnimalType";

export interface DonationItemDTO {
  tipoAnimal: AnimalType;
  cantidadBultos: number;
}
