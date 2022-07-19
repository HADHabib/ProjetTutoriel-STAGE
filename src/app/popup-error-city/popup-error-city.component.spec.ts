import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupErrorCityComponent } from './popup-error-city.component';

describe('PopupErrorCityComponent', () => {
  let component: PopupErrorCityComponent;
  let fixture: ComponentFixture<PopupErrorCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupErrorCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupErrorCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
