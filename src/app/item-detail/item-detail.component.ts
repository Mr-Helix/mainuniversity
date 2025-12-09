import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-items-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  allItems: any[] = [];
  displayedItems: any[] = [];
  filteredItems: any[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 20;
item: any;

  constructor(private PokeapiService: PokeapiService, private router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  updateDisplayedItems(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.displayedItems = this.allItems.slice(start, end);
    this.filteredItems = [...this.displayedItems];
  }

  filterItems(): void {
    const query = this.searchQuery.toLowerCase();
    if (query) {
      this.filteredItems = this.allItems.filter(item =>
        item.name.toLowerCase().includes(query)
      );
    } else {
      this.updateDisplayedItems();
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  goToDetail(name: string): void {
    this.router.navigate(['/item', name]);
  }
}