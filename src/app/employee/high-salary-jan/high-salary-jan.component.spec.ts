import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSalaryJanComponent } from './high-salary-jan.component';

describe('HighSalaryJanComponent', () => {
  let component: HighSalaryJanComponent;
  let fixture: ComponentFixture<HighSalaryJanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighSalaryJanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighSalaryJanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
