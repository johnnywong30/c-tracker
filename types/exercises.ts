export type ExerciseStandard = {
  level: number;
  sets: number;
  reps: number;
};

export type Exercise = {
  id: number;
  name: string;
  description: string;
  referenceUrl?: string;
  tutorial?: string[];
  formCues?: string[];
  standards: ExerciseStandard[];
  standardsDescription?: string;
};
