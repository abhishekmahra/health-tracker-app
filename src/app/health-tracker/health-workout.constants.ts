import {
  IWorkoutItem,
  WorkoutFilter,
  WorkoutType,
} from './health-tracker.model';

export const WORKOUT_OPTIONS: WorkoutType[] = [
  'Running',
  'Cycling',
  'Swimming',
  'Yoga',
];

export const WORKOUT_FILTER_OPTIONS: WorkoutFilter[] = [
  ...WORKOUT_OPTIONS,
  'All',
];

export const DEFAULT_WORKOUT_LIST: IWorkoutItem[] = [
  {
    id: 1,
    name: 'John Doe',
    workouts: [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    workouts: [
      { type: 'Swimming', minutes: 60 },
      { type: 'Running', minutes: 20 },
    ],
  },
  {
    id: 3,
    name: 'Mike Johnson',
    workouts: [
      { type: 'Yoga', minutes: 50 },
      { type: 'Cycling', minutes: 40 },
    ],
  },
];