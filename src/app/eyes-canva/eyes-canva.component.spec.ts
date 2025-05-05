import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyesCanvaComponent } from './eyes-canva.component';

describe('EyesCanvaComponent', () => {
  let component: EyesCanvaComponent;
  let fixture: ComponentFixture<EyesCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyesCanvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyesCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
