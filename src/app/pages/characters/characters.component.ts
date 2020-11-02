import { MarvelService } from '../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marvel-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: any = [];
  limit = 20;
  offset = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  isLoading = false;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadMoreCharacters();
  }

  loadMoreCharacters(isNewPage?: boolean): void {
    this.isLoading = true;

    if (isNewPage) {
      this.offset += 1;
    }

    this.marvelService.loadCharacters(this.limit, this.offset).subscribe((data) => {
      this.isLoading = false;
      this.characters = [...this.characters, ...data.results];
    });
  }
}
