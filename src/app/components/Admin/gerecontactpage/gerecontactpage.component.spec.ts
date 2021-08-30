import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerecontactpageComponent } from './gerecontactpage.component';

describe('GerecontactpageComponent', () => {
  let component: GerecontactpageComponent;
  let fixture: ComponentFixture<GerecontactpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerecontactpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerecontactpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
