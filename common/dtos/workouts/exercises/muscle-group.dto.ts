type MuscleGroupDTO = {
  groupId: number;
  groupName: {
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
  },
  images: string[];
  averageRecoveryTimeInDays: number;
  subGroupIds?: number[];
};

export default MuscleGroupDTO;
