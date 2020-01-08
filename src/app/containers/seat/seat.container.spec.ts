import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatContainer } from './seat.container';

describe('SeatContainer', () => {
  let component: SeatContainer;
  let fixture: ComponentFixture<SeatContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
