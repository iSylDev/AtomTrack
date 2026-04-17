

export const DAYS_OF_THE_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export type Day = (typeof  DAYS_OF_THE_WEEK)[number];

export type Occurrence = Day[];

export type OccurrenceType = 'daily' | 'weekly' | 'specific-days'