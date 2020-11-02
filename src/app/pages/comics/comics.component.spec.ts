import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MarvelService } from './../../shared/services/marvel.service';
import { DetailItemModule } from './../../shared/components/detail-item/detail-item.module';
import { CardItemLoadingModule } from './../../shared/components/card-item-loading/card-item-loading.module';
import { CardItemModule } from './../../shared/components/card-item/card-item.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsComponent } from './comics.component';

describe('ComicsComponent', () => {
  let component: ComicsComponent;
  let fixture: ComponentFixture<ComicsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ComicsComponent],
        imports: [
          HttpClientTestingModule,
          InfiniteScrollModule,
          CardItemModule,
          CardItemLoadingModule,
          DetailItemModule,
        ],
        providers: [MarvelService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
