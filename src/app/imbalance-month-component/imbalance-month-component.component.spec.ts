import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImbalanceMonthComponentComponent } from './imbalance-month-component.component';

describe('ImbalanceMonthComponentComponent', () => {
  let component: ImbalanceMonthComponentComponent;
  let fixture: ComponentFixture<ImbalanceMonthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImbalanceMonthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImbalanceMonthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
