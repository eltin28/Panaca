import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';  
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,           // Necesario para *ngIf, *ngFor, etc.
    ReactiveFormsModule     // Necesario para formularios reactivos como formGroup
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<LoginComponent>  // Inyectar MatDialogRef
  ) {
    // Inicializamos el formulario con validaciones
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Logging in with', email, password);
    } else {
      console.log('Formulario inválido');
    }
  }

  // Método para cerrar el diálogo
  closeDialog(): void {
    this.dialogRef.close();  // Cierra el diálogo
  }
}
