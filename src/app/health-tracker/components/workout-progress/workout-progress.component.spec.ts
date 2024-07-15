// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { WorkoutProgressComponent } from './workout-progress.component';

// describe('WorkoutProgressComponent', () => {
//   let component: WorkoutProgressComponent;
//   let fixture: ComponentFixture<WorkoutProgressComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [WorkoutProgressComponent]
//     });
//     fixture = TestBed.createComponent(WorkoutProgressComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutProgressComponent } from './workout-progress.component';
import { HealthWorkoutService } from '../../health-workout.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WorkoutProgressComponent', () => {
  let component: WorkoutProgressComponent;
  let fixture: ComponentFixture<WorkoutProgressComponent>;
  let healthWorkoutService: HealthWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutProgressComponent],
      providers: [HealthWorkoutService],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(WorkoutProgressComponent);
    component = fixture.componentInstance;
    healthWorkoutService = TestBed.inject(HealthWorkoutService);

    spyOn(healthWorkoutService, 'getWorkoutChartsData').and.returnValue(of({
      '2023-07-01': 30,
      '2023-07-02': 45,
    }));
  });


  it('should subscribe to getWorkoutChartsData on init', () => {
    fixture.detectChanges();

    expect(component.workoutChartLabels).toEqual(['2023-07-01', '2023-07-02']);
    expect(component.workoutChartData).toEqual([{ data: [30, 45], label: 'Minutes' }]);
  });

  it('should unsubscribe from workoutChartDataSub on destroy', () => {
    fixture.detectChanges(); 

    spyOn(component.workoutChartDataSub, 'unsubscribe');

    component.ngOnDestroy();

    expect(component.workoutChartDataSub.unsubscribe).toHaveBeenCalled();
  });
});
