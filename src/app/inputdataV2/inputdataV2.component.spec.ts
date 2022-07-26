import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdataV2Component } from './inputdataV2.component';

describe('InputdataV2Component', () => {
  let component: InputdataV2Component;
  let fixture: ComponentFixture<InputdataV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputdataV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputdataV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
