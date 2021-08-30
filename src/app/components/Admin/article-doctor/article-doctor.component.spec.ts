import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDoctorComponent } from './article-doctor.component';

describe('ArticleDoctorComponent', () => {
  let component: ArticleDoctorComponent;
  let fixture: ComponentFixture<ArticleDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
