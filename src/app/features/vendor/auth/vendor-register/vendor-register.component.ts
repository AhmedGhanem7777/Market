import { Component } from '@angular/core';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrl: './vendor-register.component.scss'
})
export class VendorRegisterComponent {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  togglePasswordVisibility(field: 'password' | 'confirmPassword') {
    if (field === 'password') {
      this.showPassword = !this.showPassword;
    } else {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}
