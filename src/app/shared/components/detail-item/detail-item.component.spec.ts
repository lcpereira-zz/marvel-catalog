import { RouterTestingModule } from '@angular/router/testing';
import { MarvelService } from './../../services/marvel.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemComponent } from './detail-item.component';

describe('DetailItemComponent', () => {
  let component: DetailItemComponent;
  let fixture: ComponentFixture<DetailItemComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DetailItemComponent],
        imports: [HttpClientTestingModule, RouterTestingModule],
        providers: [MarvelService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
