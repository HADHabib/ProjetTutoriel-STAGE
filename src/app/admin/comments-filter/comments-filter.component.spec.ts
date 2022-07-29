import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFilterComponent } from './comments-filter.component';

describe('CommentsFilterComponent', () => {
  let component: CommentsFilterComponent;
  let fixture: ComponentFixture<CommentsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
