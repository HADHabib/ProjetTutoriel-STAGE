import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosidebarComponent } from './todosidebar.component';

describe('TodosidebarComponent', () => {
  let component: TodosidebarComponent;
  let fixture: ComponentFixture<TodosidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodosidebarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
