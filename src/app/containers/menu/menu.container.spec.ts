import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuContainer } from './menu.container';

describe('MenuContainer', () => {
  let component: MenuContainer;
  let fixture: ComponentFixture<MenuContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
