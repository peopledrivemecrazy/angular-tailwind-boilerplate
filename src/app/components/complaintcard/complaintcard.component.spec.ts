import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintcardComponent } from './complaintcard.component';

describe('ComplaintcardComponent', () => {
  let component: ComplaintcardComponent;
  let fixture: ComponentFixture<ComplaintcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
