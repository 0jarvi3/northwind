import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product1: any = {
    productId: 1,
    productName: 'Çiçek',
    quantityPerUnit: '10',
    unitPrice: 10,
    unitsInStock: 10,
  };
  product2: any = {
    productId: 2,
    productName: 'Kahvaltı',
    quantityPerUnit: '10',
    unitPrice: 10,
    unitsInStock: 10,
  };

  product3: any = {
    productId: 3,
    productName: 'Monitör',
    quantityPerUnit: '10',
    unitPrice: 10,
    unitsInStock: 10,
  };

  product4: any = {
    productId: 4,
    productName: 'Mouse',
    quantityPerUnit: '10',
    unitPrice: 10,
    unitsInStock: 10,
  };

  products = [this.product1, this.product2, this.product3, this.product4];
  
  constructor() {}

  ngOnInit(): void {}
}
