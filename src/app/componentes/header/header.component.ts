import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TokenService } from '../../servicios/token.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css' 
})
export class HeaderComponent {

  title = 'PANACA';

  isLogged = false;
  email: string= "";

  constructor(private tokenService: TokenService){
    this.isLogged = this.tokenService.isLogged();
    if(this.isLogged){
      
    }
  }

  public logout(){
    this.tokenService.logout();
  }

}
