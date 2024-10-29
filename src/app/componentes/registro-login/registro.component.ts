import { Component, OnInit, Inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AbstractControlOptions, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
// import { PublicoService } from '../../servicios/publico.service';
// import { AuthService } from '../../servicios/auth.service';
// import { AlertaComponent } from '../alerta/alerta.component';
// import { Alerta } from '../../dto/alerta';
// import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ReactiveFormsModule , FontAwesomeModule, 
    // AlertaComponent
  ],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroLoginComponent implements OnInit {

  container: HTMLElement | null = null;
  showPassword = false;
  activeIcon = 'fa-eye'; //el icono de ojo abierto está activo
  // alerta!:Alerta;
  registroForm!: FormGroup;
  loginForm!: FormGroup;


  constructor(@Inject(DOCUMENT, ) private document: Document, private formBuilder: FormBuilder,
  // private publicoService: PublicoService, 
    // private authService: AuthService, 
    // private tokenService: TokenService
  ) {

    this.crearFormulario();
  }

  private crearFormulario() {

    this.registroForm = this.formBuilder.group(
      {
      cedula: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]],
      confirmaPassword: ['', [Validators.required]]
      },
      { 
        validators: [this.passwordsMatchValidator]
      } as AbstractControlOptions
    );

    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      }
    );

   }
   

  public registrar() {
    console.log(this.registroForm.value);
  }

  public login() {
    console.log(this.loginForm.value);
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmaPassword = formGroup.get('confirmaPassword')?.value;
   
   
    // Si las contraseñas no coinciden, devuelve un error, de lo contrario, null
    return password == confirmaPassword ? null : { passwordsMismatch: true };
  }   

  ngOnInit(): void {
    this.container = this.document.getElementById('container'); // Get container reference

    if (this.container) {
      const signUpButton = this.document.getElementById('signUp');
      const signInButton = this.document.getElementById('signIn');

      if (signUpButton && signInButton) {
        signUpButton.addEventListener('click', () => this.togglePanel('right'));
        signInButton.addEventListener('click', () => this.togglePanel('left'));
      }
    }
  }

  togglePanel(direction: 'left' | 'right'): void {
    if (!this.container) {
      return;
    }
    this.container.classList.toggle('right-panel-active');
  }

  togglePasswordVisibility() {
    this.showPassword =!this.showPassword;
    this.activeIcon = this.activeIcon === 'fa-eye'? 'fa-eye-slash' : 'fa-eye'; // Cambia el icono activo
  }
  
}