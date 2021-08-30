import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactnowComponent } from './contactnow.component';

describe('ContactnowComponent', () => {
  let component: ContactnowComponent;
  let fixture: ComponentFixture<ContactnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
