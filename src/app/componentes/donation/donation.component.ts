import { Component } from '@angular/core';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css'
})
export class DonationComponent {
  /*

  this.form = this.fb.group<DonationItemDto>({
  tipoAnimal: [null, Validators.required],
  cantidadBultos: [1, [Validators.required, Validators.min(1)]]
});

**/
/**

import { AnimalType } from '../enums/animal-type.enum';

/**
 * Información asociada a cada tipo de animal.
 * Este objeto puede ser usado para UI, cálculos o validaciones.
 */

/**
export const AnimalTypeInfo: Record<AnimalType, { displayName: string; pricePerBulto: number }> = {
  [AnimalType.PERRO]: { displayName: 'Perro', pricePerBulto: 50000 },
  [AnimalType.GATO]: { displayName: 'Gato', pricePerBulto: 45000 },
  [AnimalType.CABALLO]: { displayName: 'Caballo', pricePerBulto: 100000 },
  [AnimalType.VACA]: { displayName: 'Vaca', pricePerBulto: 120000 },
  [AnimalType.GALLINA]: { displayName: 'Gallina', pricePerBulto: 15000 },
  [AnimalType.CONEJO]: { displayName: 'Conejo', pricePerBulto: 30000 },
  [AnimalType.AVESTRUZ]: { displayName: 'Avestruz', pricePerBulto: 150000 },
  [AnimalType.CERDO]: { displayName: 'Cerdo', pricePerBulto: 80000 }
};
 */
}