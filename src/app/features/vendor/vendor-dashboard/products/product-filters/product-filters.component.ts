import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrl: './product-filters.component.scss'
})
export class ProductFiltersComponent {
  @Output() filterChange = new EventEmitter<any>();
  
  filters = {
    status: 'all',
    category: 'all',
    price: {
      min: 0,
      max: 1000
    }
  };

  categories = [
    'All Categories',
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports'
  ];

  onFilterChange(): void {
    this.filterChange.emit(this.filters);
  }
}
