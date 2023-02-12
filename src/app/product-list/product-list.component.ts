import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product("pizza", 3),
      new Product("burger", 4),
      new Product("sallad", 5)
    ]
  }
}
