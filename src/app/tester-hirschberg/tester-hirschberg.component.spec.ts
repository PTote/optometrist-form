import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterHirschbergComponent } from './tester-hirschberg.component';

xdescribe('TesterHirschbergComponent', () => {
  let component: TesterHirschbergComponent;
  let fixture: ComponentFixture<TesterHirschbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesterHirschbergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesterHirschbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
