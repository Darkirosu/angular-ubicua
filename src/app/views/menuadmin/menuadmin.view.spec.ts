import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadminView } from './menuadmin.view';

describe('MenuadminView', () => {
  let component: MenuadminView;
  let fixture: ComponentFixture<MenuadminView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuadminView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadminView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
