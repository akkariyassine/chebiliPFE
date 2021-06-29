import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesDocComponent } from './times-doc.component';

describe('TimesDocComponent', () => {
  let component: TimesDocComponent;
  let fixture: ComponentFixture<TimesDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
