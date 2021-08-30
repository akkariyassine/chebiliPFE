import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepfinalComponent } from './stepfinal.component';

describe('StepfinalComponent', () => {
  let component: StepfinalComponent;
  let fixture: ComponentFixture<StepfinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepfinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepfinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
