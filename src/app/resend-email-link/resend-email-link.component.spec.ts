import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResendEmailLinkComponent } from './resend-email-link.component';

describe('ResendEmailLinkComponent', () => {
  let component: ResendEmailLinkComponent;
  let fixture: ComponentFixture<ResendEmailLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResendEmailLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResendEmailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
