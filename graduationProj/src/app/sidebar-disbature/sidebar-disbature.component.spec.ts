import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDisbatureComponent } from './sidebar-disbature.component';

describe('SidebarDisbatureComponent', () => {
  let component: SidebarDisbatureComponent;
  let fixture: ComponentFixture<SidebarDisbatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarDisbatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarDisbatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
