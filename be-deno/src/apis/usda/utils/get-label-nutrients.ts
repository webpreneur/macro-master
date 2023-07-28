type Nutrients = {
  fat: number;
  protein: number;
  carbs: number;
};

const calculateCalories = ({ fat, protein, carbs }: Nutrients): number => {
  const FAT_CALORIES_PER_GRAM = 9;
  const PROTEIN_CALORIES_PER_GRAM = 4;
  const CARBS_CALORIES_PER_GRAM = 4;

  return (
    fat * FAT_CALORIES_PER_GRAM +
    protein * PROTEIN_CALORIES_PER_GRAM +
    carbs * CARBS_CALORIES_PER_GRAM
  );
};

export default calculateCalories;
