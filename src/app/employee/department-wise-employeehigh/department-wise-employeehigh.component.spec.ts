import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentWiseEmployeehighComponent } from './department-wise-employeehigh.component';

describe('DepartmentWiseEmployeehighComponent', () => {
  let component: DepartmentWiseEmployeehighComponent;
  let fixture: ComponentFixture<DepartmentWiseEmployeehighComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentWiseEmployeehighComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentWiseEmployeehighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
