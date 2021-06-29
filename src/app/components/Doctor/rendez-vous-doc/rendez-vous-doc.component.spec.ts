import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousDocComponent } from './rendez-vous-doc.component';

describe('RendezVousDocComponent', () => {
  let component: RendezVousDocComponent;
  let fixture: ComponentFixture<RendezVousDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RendezVousDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RendezVousDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
