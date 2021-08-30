import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotvalidDoctorComponent } from './notvalid-doctor.component';

describe('NotvalidDoctorComponent', () => {
  let component: NotvalidDoctorComponent;
  let fixture: ComponentFixture<NotvalidDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotvalidDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotvalidDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
