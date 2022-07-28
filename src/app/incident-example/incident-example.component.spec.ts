import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentExampleComponent } from './incident-example.component';

describe('IncidentExampleComponent', () => {
  let component: IncidentExampleComponent;
  let fixture: ComponentFixture<IncidentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IncidentExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
