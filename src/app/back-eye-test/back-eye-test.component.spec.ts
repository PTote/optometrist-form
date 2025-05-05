import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEyeTestComponent } from './back-eye-test.component';

describe('BackEyeTestComponent', () => {
  let component: BackEyeTestComponent;
  let fixture: ComponentFixture<BackEyeTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackEyeTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackEyeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
