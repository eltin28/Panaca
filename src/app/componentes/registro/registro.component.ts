import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from "../header/header.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
 selector: 'app-registro',
 standalone: true,
 imports: [RouterModule,ReactiveFormsModule,CommonModule, HeaderComponent],
 templateUrl: './registro.component.html',
 styleUrl: './registro.component.css'
})
export class RegistroComponent{

 registroForm!: FormGroup;

 constructor(private formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  private crearFormulario() {  
    this.registroForm = this.formBuilder.group({
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
      confirmarPassword: ['', [Validators.required]]
    },
    {
      validators: [this.passwordsMatchValidator, this.emailMatchValidator]
    } as AbstractControlOptions
  );
  }
  

 public registrar() {
  console.log(this.registroForm.value);
}

emailMatchValidator(formGroup: FormGroup){
  const email = formGroup.get('email')?.value;
  const confirmarEmail = formGroup.get('confirmarEmail')?.value

  return email == confirmarEmail ? null : { emailMatchValidator: true};
}

passwordsMatchValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value;
  const confirmarPassword = formGroup.get('confirmarPassword')?.value;
 
  // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
  return password == confirmarPassword ? null : { passwordsMismatch: true };
 }
 


}
