import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmacieComponent } from './admin-pharmacie.component';

describe('AdminPharmacieComponent', () => {
  let component: AdminPharmacieComponent;
  let fixture: ComponentFixture<AdminPharmacieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPharmacieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
