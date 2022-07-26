import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathertableComponent } from './weathertable.component';

describe('WeathertableComponent', () => {
  let component: WeathertableComponent;
  let fixture: ComponentFixture<WeathertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeathertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
