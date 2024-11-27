import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless ',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Head',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 1,
      name: 'Wireless Headphones 123',
      sku: 'WH-001',
      price: 299.99,
      stock: 50,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Smart Watch',
      sku: 'SW-002',
      price: 199.99,
      stock: 30,
      status: 'Active',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      sku: 'BS-003',
      price: 149.99,
      stock: 20,
      status: 'Inactive',
      image: 'https://via.placeholder.com/150'
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  onFilterChange(filters: any): void {
    console.log('Filters changed:', filters);
    // Implement filter logic here
  }

  onSearch(searchTerm: string): void {
    console.log('Search term:', searchTerm);
    // Implement search logic here
  }
}
