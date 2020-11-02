import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ComicsComponent } from './comics.component';
import { ComicsRoutingModule } from './comics-routing.module';

@NgModule({
  declarations: [ComicsComponent],
  imports: [CommonModule, ComicsRoutingModule, InfiniteScrollModule],
  providers: [],
})
export class ComicsModule {}
