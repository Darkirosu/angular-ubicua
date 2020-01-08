import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenulogueView } from './menulogue.view';

describe('MenulogueView', () => {
  let component: MenulogueView;
  let fixture: ComponentFixture<MenulogueView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenulogueView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenulogueView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
