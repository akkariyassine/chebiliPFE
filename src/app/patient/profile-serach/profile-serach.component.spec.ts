import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSerachComponent } from './profile-serach.component';

describe('ProfileSerachComponent', () => {
  let component: ProfileSerachComponent;
  let fixture: ComponentFixture<ProfileSerachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSerachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSerachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
