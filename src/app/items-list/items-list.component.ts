import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  pokemons: any[] = [];
  totalCount = 0;
  itemsPerPage = 20;
  currentPage = 1;
  searchQuery: string = '';
  filteredPokemons: any[] = [];

  constructor(private pokeapiService: PokeapiService) { }

ngOnInit(): void {
  this.getPokemons();
}

getPokemons(): void {
  const offset = (this.currentPage - 1) * this.itemsPerPage;
  this.pokeapiService.getPokemons(offset, this.itemsPerPage).subscribe(data => {
    this.totalCount = data.count;

    const pokemonDetailsObservables: Observable<any>[] = data.results.map((pokemon: any) =>
      this.pokeapiService.getPokemonDetails(pokemon.url)
    );

    forkJoin(pokemonDetailsObservables).subscribe((pokemonDetails: any[]) => {
       this.pokemons = pokemonDetails;
       this.filterPokemons();
    });
   });
}

filterPokemons(): void {
  this.filteredPokemons = this.pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

pageChanged(event: number): void {
  this.currentPage = event;
  this.getPokemons();
}
}