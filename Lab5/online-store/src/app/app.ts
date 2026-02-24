import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  title = 'online-store';
  
  categories: Category[];
  selectedCategoryId: number | null = null;
  products: Product[] = [];


  constructor(private productService: ProductService){
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  selectCategory(categoryId: number): void{
    this.selectedCategoryId = categoryId;
  }

  getFilteredProducts(): Product[] {
    if (!this.selectedCategoryId) {
      return [];  // Если категория не выбрана - пустой массив
    }
    return this.productService.getProductsByCategory(this.selectedCategoryId);
  }


   // Обработка лайка
  onLike(productId: number): void {
    this.productService.likeProduct(productId);
    // Обновляем массив продуктов (чтобы изменения отобразились)
    this.products = [...this.productService.getProducts()];
  }

  // Обработка удаления
  onDelete(productId: number): void {
    this.productService.deleteProduct(productId);
    // Обновляем массив продуктов
    this.products = [...this.productService.getProducts()];
  }

  // Проверка, выбрана ли категория
  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }


}