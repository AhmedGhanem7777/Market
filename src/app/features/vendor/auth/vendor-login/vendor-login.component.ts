import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrl: './vendor-login.component.scss'
})
export class VendorLoginComponent {



  showPassword: boolean = false;
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
