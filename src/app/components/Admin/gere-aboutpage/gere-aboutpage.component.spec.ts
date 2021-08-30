import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GereAboutpageComponent } from './gere-aboutpage.component';

describe('GereAboutpageComponent', () => {
  let component: GereAboutpageComponent;
  let fixture: ComponentFixture<GereAboutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GereAboutpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GereAboutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
