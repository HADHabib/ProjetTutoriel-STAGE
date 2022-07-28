import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupAddWeatherComponent } from './popup-add-weather.component';

describe('PopupAddWeatherComponent', () => {
  let component: PopupAddWeatherComponent;
  let fixture: ComponentFixture<PopupAddWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopupAddWeatherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupAddWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
