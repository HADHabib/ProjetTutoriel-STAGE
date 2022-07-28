import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentNumberComponent } from './incident-number.component';

describe('IncidentNumberComponent', () => {
  let component: IncidentNumberComponent;
  let fixture: ComponentFixture<IncidentNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
