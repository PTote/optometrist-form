import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverTestComponent } from './cover-test.component';

describe('CoverTestComponent', () => {
  let component: CoverTestComponent;
  let fixture: ComponentFixture<CoverTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoverTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
