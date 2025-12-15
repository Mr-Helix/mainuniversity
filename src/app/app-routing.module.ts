import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';

const routes: Routes = [
  {'path': '', component: AboutComponent},
  {'path': 'items', component: ItemsComponent},
  {'path': 'items-list', component: ItemsListComponent},
  {'path': 'pokemon/:name', component: PokemonDetailComponent },
  {'path': 'gallery', component: GalleryComponent},
  {'path': 'feedback', component: FeedbackComponent},
  {'path': 'store', component: StoreComponent},
  {'path': 'cart', component: CartComponent},
  {'path': 'product/:id', component: ProductDetailComponent},
  {'path': 'product-detail/:id', component: ProductDetailComponent },
  {'path': '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
