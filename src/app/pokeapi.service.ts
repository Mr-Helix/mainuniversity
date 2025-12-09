import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
private apiUrl = 'https://pokeapi.co/api/v2';
private itemApiUrl = 'https://pokeapi.co/api/v2/item';


constructor(private http: HttpClient) {}

getPokemons(offset: number, limit: number): Observable<any> {
  return this.http.get(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`);
}

getPokemonDetails(url: string): Observable<any> {
  return this.http.get(url);
}

getItems(): Observable<any> {
  return this.http.get(`${this.itemApiUrl}?limit=100`).pipe(
    map((response: any) => response.results)
  );
}
getItemDetails(url: string): Observable<any> {
  return this.http.get(url);
}

}