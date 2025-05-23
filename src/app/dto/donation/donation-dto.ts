import { DonationItemDTO } from "./donation-item-dto";

export interface DonationDTO {
  donanteId: string;
  items: DonationItemDTO[];
}