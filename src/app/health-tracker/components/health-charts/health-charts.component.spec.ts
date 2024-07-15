import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthChartsComponent } from './health-charts.component';

describe('HealthChartsComponent', () => {
  let component: HealthChartsComponent;
  let fixture: ComponentFixture<HealthChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthChartsComponent]
    });
    fixture = TestBed.createComponent(HealthChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
