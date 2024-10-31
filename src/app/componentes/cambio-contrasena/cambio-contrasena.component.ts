import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio-contrasena',
  standalone: true,
  imports: [],
  templateUrl: './cambio-contrasena.component.html',
  styleUrl: './cambio-contrasena.component.css'
})
export class CambioContrasenaComponent {

  step = 1;
    email = '';
    code = '';
    newPassword = '';
    confirmPassword = '';
  
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
  }