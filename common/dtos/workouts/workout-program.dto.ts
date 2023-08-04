import WorkoutDto from "./workout.dto.ts";

type WorkoutProgramDto = {
    description?: string;
    name: string;
    id: number;
    workouts: WorkoutDto[];
};

export default WorkoutProgramDto;