import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteLocationsComponent } from './favorite-locations.component';

describe('FavoriteLocationsComponent', () => {
  let component: FavoriteLocationsComponent;
  let fixture: ComponentFixture<FavoriteLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
