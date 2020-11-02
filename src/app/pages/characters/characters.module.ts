import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharactersComponent } from './characters.component';
import { CharactersRoutingModule } from './characters-routing.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, CharactersRoutingModule, InfiniteScrollModule],
  providers: [],
})
export class CharactersModule {}
