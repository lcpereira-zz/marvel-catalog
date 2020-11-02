import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marvel-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
})
export class ComicsComponent implements OnInit {
  comics: any = [];
  limit = 20;
  offset = 0;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  isLoading = false;

  constructor(private marvelService: MarvelService) {}

  ngOnInit(): void {
    this.loadMoreComics();
  }

  loadMoreComics(isNewPage?: boolean): void {
    this.isLoading = true;

    if (isNewPage) {
      this.offset += 1;
    }

    this.marvelService.loadComics(this.limit, this.offset).subscribe((data) => {
      this.isLoading = false;
      this.comics = [...this.comics, ...data.results];
    });
  }
}
