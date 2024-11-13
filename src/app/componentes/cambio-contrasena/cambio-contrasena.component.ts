import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-cambio-contrasena',
  standalone: true,
  imports: [ FontAwesomeModule ],
  templateUrl: './cambio-contrasena.component.html',
  styleUrl: './cambio-contrasena.component.css'
})
export class CambioContrasenaComponent {

  step = 1;
  email = '';
  newPassword = '';
  confirmPassword = '';
  showPassword = false;
  activeIcon = 'fa-eye'; //el icono de ojo abierto está activo
  code = new Array(6);

  nextStep() {
    this.step++;
  }

  previousStep() {
    if (this.step > 1) this.step--;
  }

  submitNewPassword() {
    if (this.newPassword === this.confirmPassword) {
      // Lógica para cambiar la contraseña
      console.log('Contraseña cambiada correctamente');
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  togglePasswordVisibility() {
    this.showPassword =!this.showPassword;
    this.activeIcon = this.activeIcon === 'fa-eye'? 'fa-eye-slash' : 'fa-eye'; // Cambia el icono activo
  }
}