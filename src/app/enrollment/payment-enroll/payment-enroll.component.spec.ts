import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentEnrollComponent } from './payment-enroll.component';

describe('PaymentEnrollComponent', () => {
  let component: PaymentEnrollComponent;
  let fixture: ComponentFixture<PaymentEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentEnrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
