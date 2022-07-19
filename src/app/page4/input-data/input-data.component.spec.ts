import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataComponent2 } from './input-data.component';

describe('InputDataComponent', () => {
  let component: InputDataComponent2;
  let fixture: ComponentFixture<InputDataComponent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDataComponent2 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDataComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
