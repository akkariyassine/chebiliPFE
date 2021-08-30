import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegister2Component } from './doctor-register2.component';

describe('DoctorRegister2Component', () => {
  let component: DoctorRegister2Component;
  let fixture: ComponentFixture<DoctorRegister2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegister2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRegister2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
