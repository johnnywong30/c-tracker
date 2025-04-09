import { type Exercise } from "@/types/exercises";

export type Routine = {
  id: number;
  name: string;
  description: string;
  exercises: Exercise[];
};
