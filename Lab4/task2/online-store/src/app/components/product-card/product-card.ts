// src/app/components/product-card/product-card.ts

import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() product!: Product;

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product.name} - ${this.product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(telegramUrl, '_blank');
  }

  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    return new Array(fullStars).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }

  getEmptyStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    return new Array(emptyStars).fill(0);
  }
}