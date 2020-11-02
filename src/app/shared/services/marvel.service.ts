import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  readonly api = 'https://gateway.marvel.com/v1/public';

  constructor(private http: HttpClient) {}

  loadComics(limit: number, offset: number, searchText?: string): Observable<any> {
    let params = `limit=${limit}&offset=${offset}`;

    if (searchText) {
      params += `&titleStartsWith=${searchText}`;
    }

    return this.http.get(`${this.api}/comics?${params}`).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  getComic(comicId): Observable<any> {
    return this.http.get(`${this.api}/comics/${comicId}`).pipe(
      map((result: any) => {
        return result.data.results[0];
      })
    );
  }

  loadCharacters(limit: number, offset: number, searchText?: string): Observable<any> {
    let params = `limit=${limit}&offset=${offset}`;

    if (searchText) {
      params += `&nameStartsWith=${searchText}`;
    }

    return this.http.get(`${this.api}/characters?${params}`).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  getCharacter(characterId): Observable<any> {
    return this.http.get(`${this.api}/characters/${characterId}`).pipe(
      map((result: any) => {
        return result.data.results[0];
      })
    );
  }
}
