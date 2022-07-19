import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagesidebarComponent } from './homepagesidebar.component';

describe('HomepagesidebarComponent', () => {
  let component: HomepagesidebarComponent;
  let fixture: ComponentFixture<HomepagesidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagesidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
