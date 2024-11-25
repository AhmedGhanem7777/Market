import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 

  constructor(  private _router: Router) {
 
  }

 
  onSubmit() {
  
  }

  goToLogin() {
    this._router.navigate(['client/Auth/login']);
  }
}
