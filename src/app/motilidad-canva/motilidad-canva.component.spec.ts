import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotilidadCanvaComponent } from './motilidad-canva.component';

describe('MotilidadCanvaComponent', () => {
  let component: MotilidadCanvaComponent;
  let fixture: ComponentFixture<MotilidadCanvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotilidadCanvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotilidadCanvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
