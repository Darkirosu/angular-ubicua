import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationContainer } from './information.container';

describe('InformationContainer', () => {
  let component: InformationContainer;
  let fixture: ComponentFixture<InformationContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
