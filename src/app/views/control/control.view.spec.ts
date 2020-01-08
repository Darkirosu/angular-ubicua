import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlView as ControlView } from './control.view';

describe('ControlComponent', () => {
  let component: ControlView;
  let fixture: ComponentFixture<ControlView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
