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

  loadComics(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.api}/comics?limit=${limit}&offset=${offset}`).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  loadCharacters(limit: number, offset: number): Observable<any> {
    return this.http.get(`${this.api}/characters?limit=${limit}&offset=${offset}`).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }
}
