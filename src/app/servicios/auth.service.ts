import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../servicios/token.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/autenticacion/mensaje-dto';
import { LoginDTO } from '../dto/cuenta/login-dto';
import { CrearCuentaDTO } from '../dto/cuenta/crear-cuenta-dto';
import { ValidarCodigoDTO } from '../dto/cuenta/validar-codigo-dto';
import { CambiarPasswordDTO } from '../dto/cuenta/cambiar-password-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = "http://localhost:8081/api/auth";


  constructor(private http: HttpClient, private tokenService: TokenService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.tokenService.isLogged()) {
      this.router.navigate([""]);
      return false;
    }
    return true;
  }
 
  //_______________________________ METODOS CUENTA _____________________________________________

   public crearCuenta(cuentaDTO: CrearCuentaDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/crear-cuenta`, cuentaDTO);
   }

   public validarCodigo(validarCodigoDTO: ValidarCodigoDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/validar-codigo-registro`, validarCodigoDTO);
   }

   public cambiarPassword(cambiarPasswordDTO: CambiarPasswordDTO): Observable<MensajeDTO> {
    return this.http.put<MensajeDTO>(`${this.authURL}/cambiar-password`, cambiarPasswordDTO);
   }
   
     //_______________________________ METODOS AUTENTICACION _____________________________________________________

   public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/iniciar-sesion`, loginDTO);
   }
   
}

  export const LoginGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(AuthService).canActivate(next, state);
  }
 
