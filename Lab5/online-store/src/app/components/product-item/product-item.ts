
import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})



export class ProductItem {
  // @Input() product!: Product;


  //get from parent
  product = input.required<Product>();

  //send to parent
  like = output<number>();
  delete = output<number>();


  onLike(): void{
    this.like.emit(this.product().id); // send the event to parent
  }

  onDelete(): void{
    if(confirm('Удалить этот товар?')){
      this.delete.emit(this.product().id);
    }
  }
  

  shareOnWhatsApp() {
    const text = `Check out this product: ${this.product.name} - ${this.product().link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl);
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product.name);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(telegramUrl);
  }

}