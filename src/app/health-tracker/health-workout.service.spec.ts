// import { TestBed } from '@angular/core/testing';

// import { HealthWorkoutService } from './health-workout.service';

// describe('HealthWorkoutService', () => {
//   let service: HealthWorkoutService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(HealthWorkoutService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { TestBed } from '@angular/core/testing';
import { HealthWorkoutService } from './health-workout.service';
import { IWorkoutItem, WorkoutType, WorkoutFilter } from './health-tracker.model';
import { DEFAULT_WORKOUT_LIST } from './health-workout.constants';
import { take } from 'rxjs/operators';

describe('HealthWorkoutService', () => {
  let service: HealthWorkoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthWorkoutService);
    localStorage.clear(); // Clear localStorage before each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should initialize workout list with default values if localStorage is empty', () => {
    service.initWorkoutList();

    service.workoutList$.pipe(take(1)).subscribe((workoutList) => {
      expect(workoutList).toEqual(DEFAULT_WORKOUT_LIST);
    });
  });



  it('should set and get search query', () => {
    service.setSearchQuery('John');

    service.searchQuery$.pipe(take(1)).subscribe((query) => {
      expect(query).toBe('John');
    });
  });

  it('should set and get selected user', () => {
    service.setSelectedUser('John');

    service.selectedUser$.pipe(take(1)).subscribe((selectedUser) => {
      expect(selectedUser).toBe('John');
    });
  });
});
