import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TipoCupon } from '../../enums/TipoCupon';
import { EstadoCupon } from '../../enums/EstadoCupon';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';


@Component({
  selector: 'app-crear-cupon',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarAdminComponent],
  templateUrl: './crear-cupon.component.html',
  styleUrl: './crear-cupon.component.css'
})
export class CrearCuponComponent implements OnInit {
  crearCuponForm!: FormGroup;

  tiposCupon: TipoCupon[] = [TipoCupon.UNICO, TipoCupon.MULTIPLE];
  estadosCupon: EstadoCupon[] = [EstadoCupon.DISPONIBLE, EstadoCupon.NO_DISPONIBLE]; 

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(): void {
    this.crearCuponForm = this.fb.group({
      codigo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      porcentajeDescuento: [null, [Validators.required, Validators.min(0.1), Validators.max(100)]],
      fechaVencimiento: [null, [Validators.required]],
      fechaApertura: [null, [Validators.required]],
      tipoCupon: [null, [Validators.required]],
      estadoCupon: [null, [Validators.required]],
    });
  }

  crearCupon(): void {
    if (this.crearCuponForm.valid) {
      const cuponData = this.crearCuponForm.value;
      // Lógica para enviar cuponData al backend
      console.log('Cupón creado:', cuponData);
    } else {
      this.crearCuponForm.markAllAsTouched();
    }
  }
}
