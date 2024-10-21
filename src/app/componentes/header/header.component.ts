import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.open(LoginComponent, {
      width: '450px',
      panelClass: 'custom-dialog-container',
      disableClose: true  
    });
  }
}
