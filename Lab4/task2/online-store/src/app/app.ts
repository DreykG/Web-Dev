import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './components/product-list/product-list';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from "./components/product-card/product-card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  template: `
    <main>
      <app-product-list></app-product-list>
    </main>
  `,
  styles: [`
    main {
      min-height: 100vh;
      background-color: #f8f9fa;
    }
  `]
})
export class App {
  title = 'online-store';
}