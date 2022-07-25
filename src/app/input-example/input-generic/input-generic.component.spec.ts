import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGeneric } from './input-generic.component';

describe('InputGenericComponent', () => {
  let component: InputGeneric;
  let fixture: ComponentFixture<InputGeneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGeneric ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputGeneric);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
