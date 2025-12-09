import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 

import { PokeapiService } from './pokeapi.service';;

import { NgxPaginationModule } from 'ngx-pagination'
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { AboutComponent } from './about/about.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { itemCardComponent } from './item-card/item-card.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    PokemonCardComponent,
    HeaderComponent,
    ItemsComponent,
    AboutComponent,
    PokemonDetailComponent,
    itemCardComponent,
    ItemDetailComponent,
    FooterComponent,
    GalleryComponent,
  ],
  imports: [
    NgxPaginationModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
