import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacklistDoctorComponent } from './blacklist-doctor.component';

describe('BlacklistDoctorComponent', () => {
  let component: BlacklistDoctorComponent;
  let fixture: ComponentFixture<BlacklistDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlacklistDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacklistDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
