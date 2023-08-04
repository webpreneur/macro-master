type EquipmentDTO = {
  equipmentId: number;
  name: {
    en: string;
    hu: string;
  };
  images: string[];
  description: {
    en: string;
    hu: string;
  };
};

export default EquipmentDTO;
