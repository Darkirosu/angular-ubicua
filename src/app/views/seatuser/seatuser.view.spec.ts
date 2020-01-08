import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatuserView } from './seatuser.view';

describe('SeatuserView', () => {
  let component: SeatuserView;
  let fixture: ComponentFixture<SeatuserView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatuserView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatuserView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
