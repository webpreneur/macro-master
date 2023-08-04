type MuscleSubGroupDTO = {
    subGroupId: number;
    // A fő izomcsoport azonosítója, amelyhez a alcsoport tartozik
    parentGroupId: number;
    subGroupName: {
      en: string;
      hu: string;
    };
    description: {
      en: string;
      hu: string;
    };
    tips: {
      en: string;
      hu: string;
    };
    images: string[];
    averageRecoveryTimeInDays: number;
    // Az alcsoportot célzó gyakorlatok azonosítói
    relatedExerciseIds?: number[];
  };
  
  export default MuscleSubGroupDTO;
  