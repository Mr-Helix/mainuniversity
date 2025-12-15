import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {

 products: Product[] = [
    {
      id: 1,
      name: 'Pokémon Graphic T-Shirt',
      category: 'Apparel',
      price: 29.99,
      image: 'https://store.ign.com/cdn/shop/files/Pokemon-Glaceon-Ice-Beam-T-Shirt.jpg?v=1745466551',
      description: 'Premium cotton Pokémon graphic T-shirt featuring an officially inspired design. Comfortable, breathable, and perfect for everyday wear or casual gaming sessions.'
    },
    {
      id: 2,
      name: 'Pokémon Trading Card Bundle (50 Cards)',
      category: 'Cards',
      price: 39.99,
      image: 'https://m.media-amazon.com/images/I/61dYSKNGQUL._AC_UF894,1000_QL80_.jpg',
      description: 'A curated bundle of 50 official Pokémon Trading Card Game cards. Includes a mix of common, uncommon, and rare cards—perfect for collectors and new trainers alike.'

    },
    {
      id: 3,
      name: 'Poké Ball Keychain',
      category: 'Accessories',
      price: 9.99,
      image: 'https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/4de40d0758b3436f941a126cd9fb9bd1_Large.jpg',
      description: 'Durable Poké Ball keychain made from high-quality materials. A perfect accessory for backpacks, keys, or as a small collectible for Pokémon fans.'
    },
    {
      id: 4,
      name: 'Pokémon Hoodie',
      category: 'Apparel',
      price: 59.99,
      image: 'https://mediahub.boohooman.com/bmm74967_black_xl?pdp.template',
      description: 'Soft and warm Pokémon hoodie featuring a classic Pikachu design. Made for comfort with a relaxed fit—ideal for colder days, conventions, or lounging.'
    },
    {
      id: 5,
      name: 'Elite Trainer Box',
      category: 'Cards',
      price: 79.99,
      image: 'https://m.media-amazon.com/images/I/71G8-pFVOXL.jpg',
      description: 'Official Pokémon Elite Trainer Box containing booster packs, energy cards, dice, and premium accessories. A must-have for serious collectors and competitive players.'
    },
    {
      id: 6,
      name: 'Pokémon Cap',
      category: 'Accessories',
      price: 19.99,
      image: 'https://hatstore.imgix.net/8718526176117_1.jpg',
      description: 'Stylish Pokémon cap with an embroidered logo and adjustable strap. Lightweight, comfortable, and perfect for daily wear or completing a trainer-inspired look.'
    }
  ];


  getAll() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
