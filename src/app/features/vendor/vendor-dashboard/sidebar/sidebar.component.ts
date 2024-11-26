import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {





  isProductsOpen = false;
  isProfileOpen = false;
  isMobileMenuOpen = false;

  toggleProducts() {
    this.isProductsOpen = !this.isProductsOpen;
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenuOnMobile() {
    if (window.innerWidth <= 768) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = '';
    }
  }





}

