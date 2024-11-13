import { Component } from '@angular/core';
// import { AuthService } from '../../servicios/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TokenService } from '../../servicios/token.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  nombre: any; 
  title = 'Broletos';
  logueado: boolean;
  mostrarMenu: boolean;
  bandera = false;

  constructor(private tokenService: TokenService){
    this.logueado = this.isLogged();
    this.mostrarMenu = this.toggleMenu();
    this.nombre = this.nombreUser();
  }

  toggleMenu():  boolean{
    return this.bandera === false?true:false;
  }

  public isLogged(): boolean{
    return this.tokenService.isLogged();
  }

  public nombreUser(): void {
    if (this.logueado) {
        this.nombre = this.tokenService.getAllTokenData().nombre;
    }
  }

  public logout() {
    this.tokenService.logout();
  }

  // public editarPerfil(){
  //   this.tokenService.editarPerfil();
  // }

}
