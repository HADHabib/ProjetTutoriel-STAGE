import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathersiderbarComponent } from './weathersidebar.component';

describe('WeathersiderbarComponent', () => {
  let component: WeathersiderbarComponent;
  let fixture: ComponentFixture<WeathersiderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathersiderbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathersiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
