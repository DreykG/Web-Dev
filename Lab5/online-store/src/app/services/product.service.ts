import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import { Category } from '../models/category.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root', // Сервис доступен во всем приложении
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Смартфоны', icon: '📱' },
    { id: 2, name: 'Ноутбуки', icon: '💻' },
    { id: 3, name: 'Наушники', icon: '🎧' },
    { id: 4, name: 'Планшеты', icon: '📟' }
  ];

   private products: Product[] = [
    // Категория 1: Смартфоны (id: 1-5)
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256Gb',
      description: 'Флагманский смартфон Apple с титановым корпусом и процессором A17 Pro.',
      price: 649990,
      rating: 4.8,
      image: 'assets/images/1_1.png',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-113138420/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Премиальный Android-смартфон с S Pen и 200MP камерой.',
      price: 599990,
      rating: 4.7,
      image: 'assets/images/1_2.png',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-512-gb-chernyi-116044201/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14 Ultra 512GB',
      description: 'Флагман Xiaomi с камерой Leica и мощным процессором.',
      price: 499990,
      rating: 4.6,
      image: 'assets/images/1_3.png',
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-16-gb-512-gb-chernyi-117684874/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 8 Pro 256GB',
      description: 'Чистый Android, лучшая камера для фото, ИИ-функции.',
      price: 449990,
      rating: 4.7,
      image: 'assets/images/1_4.png',
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-256-gb-chernyi-113692604/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12 256GB',
      description: 'Быстрый и плавный смартфон с отличной оптимизацией.',
      price: 399990,
      rating: 4.5,
      image: 'assets/images/1_5.png',
      link: 'https://kaspi.kz/shop/p/oneplus-12-12-gb-256-gb-zelenyi-116425342/',
      likes: 0,
      categoryId: 1
    },

    // Категория 2: Ноутбуки (id: 6-10)
    {
      id: 6,
      name: 'Apple MacBook Pro 14 M3 512GB',
      description: 'Профессиональный ноутбук с чипом M3 и дисплеем Liquid Retina XDR.',
      price: 899990,
      rating: 4.9,
      image: 'assets/images/2_1.png',
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-16-gb-ssd-512-gb-macos-mw2u3-137221010/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ASUS ROG Zephyrus G16',
      description: 'Игровой ноутбук с RTX 4060 и высокочастотным дисплеем.',
      price: 799990,
      rating: 4.8,
      image: 'assets/images/2_2.png',
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-16-16-gb-ssd-512-gb-dos-90nr0h43-m000w0-113289788/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo Legion 5 Pro',
      description: 'Мощный игровой ноутбук с отличной системой охлаждения.',
      price: 699990,
      rating: 4.7,
      image: 'assets/images/2_3.png',
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16-16-gb-ssd-512-gb-bez-os-16iah7h-82rf00qprk-109742784/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Dell XPS 15',
      description: 'Премиальный ультрабук с тонким корпусом и отличным экраном.',
      price: 749990,
      rating: 4.8,
      image: 'assets/images/2_4.png',
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360',
      description: 'Трансформер с сенсорным экраном и стильным дизайном.',
      price: 649990,
      rating: 4.6,
      image: 'assets/images/2_5.png',
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-116310059/',
      likes: 0,
      categoryId: 2
    },

    // Категория 3: Наушники (id: 11-15)
    {
      id: 11,
      name: 'Apple AirPods Max',
      description: 'Премиальные наушники с активным шумоподавлением и пространственным аудио.',
      price: 299990,
      rating: 4.8,
      image: 'assets/images/3_1.png',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-serebristyi-100949286/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Лучшие наушники с шумоподавлением и невероятным качеством звука.',
      price: 199990,
      rating: 4.9,
      image: 'assets/images/3_2.png',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra',
      description: 'Иммерсивный звук и лучшее шумоподавление в своем классе.',
      price: 219990,
      rating: 4.8,
      image: 'assets/images/3_3.png',
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-ultra-chernyi-115025647/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Компактные TWS-наушники с 24-бит звуком и ANC.',
      price: 89990,
      rating: 4.7,
      image: 'assets/images/3_4.png',
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds2-pro-chernyi-106128763/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'JBL Tour One M2',
      description: 'Стильные наушники с мощным басом и долгим временем работы.',
      price: 129990,
      rating: 4.6,
      image: 'assets/images/3_5.png',
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tour-one-m2-chernyi-111087160/',
      likes: 0,
      categoryId: 3
    },

    // Категория 4: Планшеты (id: 16-20)
    {
      id: 16,
      name: 'Apple iPad Pro 13 M4 256GB',
      description: 'Профессиональный планшет с ультратонким дизайном и мощным чипом M4.',
      price: 749990,
      rating: 4.9,
      image: 'assets/images/4_1.png',
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-2024-wi-fi-13-djuim-8-gb-256-gb-chernyi-119579567/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra',
      description: 'Гигантский 14.6" AMOLED-дисплей и S Pen в комплекте.',
      price: 549990,
      rating: 4.8,
      image: 'assets/images/4_2.png',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-5g-14-6-djuim-12-gb-512-gb-seryi-114535020/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Отличный планшет для учебы и развлечений по доступной цене.',
      price: 199990,
      rating: 4.6,
      image: 'assets/images/4_3.png',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-128-gb-seryi-110927907/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Huawei MatePad Pro',
      description: 'Тонкий и легкий планшет с отличным экраном и стилусом.',
      price: 299990,
      rating: 4.5,
      image: 'assets/images/4_4.png',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-pro-13-2-djuim-12-gb-256-gb-chernyi-136185418/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P12',
      description: 'Большой 12.7" дисплей, отличное соотношение цены и качества.',
      price: 179990,
      rating: 4.4,
      image: 'assets/images/4_5.png',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-pro-13-2-djuim-12-gb-256-gb-chernyi-136185418/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[]{
    return this.categories;
  }

  getProducts(): Product[]{
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[]{
    return this.products.filter(p => p.categoryId == categoryId);
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product){
      product.likes++;
    }
  }

  deleteProduct(productId: number): void{
    const index = this.products.findIndex(p => p.id === productId);
    if(index !== -1){
      this.products.splice(index, 1);
    }
  }
}
