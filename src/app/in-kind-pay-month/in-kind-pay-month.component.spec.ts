import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InKindPayMonthComponent } from './in-kind-pay-month.component';

describe('InKindPayMonthComponent', () => {
  let component: InKindPayMonthComponent;
  let fixture: ComponentFixture<InKindPayMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InKindPayMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InKindPayMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
