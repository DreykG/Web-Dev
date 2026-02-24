import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})

export class ProductList {
  products = input<Product[]>([]);

  likeProduct = output<number>();
  deleteProduct = output<number>();

  onLike(productId: number): void{
    this.likeProduct.emit(productId);
  }

  onDelete(productId: number): void{
    this.deleteProduct.emit(productId);
  }

  hasProducts(): boolean {
    return this.products().length > 0;
  }

}
