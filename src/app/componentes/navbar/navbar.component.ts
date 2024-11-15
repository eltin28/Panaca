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

  email: string = "";
  title = 'Broletos';
  isLogged = false;
  mostrarMenu: boolean;
  bandera = false;

  constructor(private tokenService: TokenService){
    this.isLogged = this.tokenService.isLogged();
    this.mostrarMenu = this.toggleMenu();
    if(this.isLogged){
      this.email = this.tokenService.getEmail();
    }
  }

  toggleMenu():  boolean{
    return this.bandera === false?true:false;
  }

  public logout() {
    this.tokenService.logout();
  }

  // public editarPerfil(){
  //   this.tokenService.editarPerfil();
  // }

}
