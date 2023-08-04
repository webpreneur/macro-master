type ExerciseDTO = {
  exerciseId: number;
  name: {
    en: string;
    hu: string;
  };
  description: {
    en: string;
    hu: string;
  };
  type: Exercise;
  difficulty: Difficulty;
  muscleGroupIds?: number[];
  muscleSubGroupIds?: number[];
  equipmentIds?: number[];
  requiresWeight: boolean;
  durationInSecs?: number;
  repetitions?: number;
  sets?: number;
  intensity?: Intensity;
};

enum Difficulty {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced",
}
enum Intensity {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}
enum Exercise {
  CARDIO = "cardio",
  STRENGTH = "strength",
  MOBILITY = "mobility",
  PLYOMETRIC = "plyometric",
  CALISTHENICS = "calisthenics",
  FUNCTIONAL = "functional",
  STRETCHING = "stretching",
  YOGA = "yoga",
  PILATES = "pilates",
  OTHER = "other",
}

export default ExerciseDTO;
