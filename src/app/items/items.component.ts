import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})

export class ItemsComponent implements OnInit {

constructor(private pokeapiService:PokeapiService) { }

  items: any[] = [];
  totalCount = 0;
  itemsPerPage = 20;
  currentPage = 1;
  searchQuery: string = '';
  filteredItems: any[] = [];


ngOnInit(): void {
  this.pokeapiService.getItems().subscribe(data => {
    this.items = data;
    this.items.forEach(item => {
      this.pokeapiService.getItemDetails(item.url).subscribe(details => {
        item.details = details;
      });
    });
  });
}

filterItems() {
  this.filteredItems = this.items.filter(items =>
    items.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  );
}

pageChanged(event: number): void {
  this.currentPage = event;
  this.ngOnInit();
}


}
