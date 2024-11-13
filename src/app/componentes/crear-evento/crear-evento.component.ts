import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, FormArray, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarAdminComponent } from '../navbar-admin/navbar-admin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-evento',
  standalone: true,
  imports: [ReactiveFormsModule, NavbarAdminComponent, CommonModule],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})
export class CrearEventoComponent {

  tiposDeEvento: string[] = ['Concierto', 'Fiesta', 'Teatro', 'Deportes'];
  crearEventoForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  private crearFormulario() {
    this.crearEventoForm = this.formBuilder.group({
      nombreEvento: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],  
      tipo: ['', [Validators.required]],
      direccionEvento: ['', [Validators.required]],
      ciudadEvento: ['', [Validators.required]],
      localidades: this.formBuilder.array([]),
      imagenPortada: ['', [Validators.required]],
      imagenLocalidades: ['', [Validators.required]]
    });
  }

  // Getter para acceder al array de localidades en el formulario
  get localidades() {
    return (this.crearEventoForm.get('localidades') as FormArray);
  }

  // Método para agregar una localidad al array
  addLocalidad() {
    const localidadGroup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(1)]]
    });
    this.localidades.push(localidadGroup);
  }

  // Método para eliminar una localidad del array
  removeLocalidad(index: number) {
    this.localidades.removeAt(index);
  }

  public onFileChange(event: any, tipo: string) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      switch (tipo) {
        case 'localidades':
          this.crearEventoForm.get('imagenLocalidades')?.setValue(files[0]);
          break;
        case 'portada':
          this.crearEventoForm.get('imagenPortada')?.setValue(files[0]);
          break;
      }
    }
  }

  public crearEvento() {
    if (this.crearEventoForm.valid) {
      console.log(this.crearEventoForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
