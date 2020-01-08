import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationView } from './information.view';

describe('InformationView', () => {
  let component: InformationView;
  let fixture: ComponentFixture<InformationView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
