import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPaComponent } from './dashboard-pa.component';

describe('DashboardPaComponent', () => {
  let component: DashboardPaComponent;
  let fixture: ComponentFixture<DashboardPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
