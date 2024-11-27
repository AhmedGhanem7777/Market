import { Component, Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { emit } from 'process';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrl: './product-header.component.scss'
})
export class ProductHeaderComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  onSearch(): void {
    this.search.emit(this.searchTerm);
  }
}
