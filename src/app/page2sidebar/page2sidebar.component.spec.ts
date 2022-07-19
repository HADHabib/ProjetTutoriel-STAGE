import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2sidebarComponent } from './page2sidebar.component';

describe('Page2sidebarComponent', () => {
  let component: Page2sidebarComponent;
  let fixture: ComponentFixture<Page2sidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page2sidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Page2sidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
