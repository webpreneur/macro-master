import { NutrientAcquisitionDetails } from "./nutrient-acquisition-details.ts";

export interface NutrientAnalysisDetails {
  /**
   * Example: 343866
   */
  subSampleId: number;
  /**
   * Example: 0E-8
   */
  amount: number;
  /**
   * Example: 1005
   */
  nutrientId: number;
  /**
   * Example: 10.2135/cropsci2017.04.0244
   */
  labMethodDescription: string;
  /**
   */
  labMethodOriginalDescription: string;
  /**
   * Example: https://doi.org/10.2135/cropsci2017.04.0244
   */
  labMethodLink: string;
  /**
   * Example: DOI for Beans
   */
  labMethodTechnique: string;
  /**
   */
  nutrientAcquisitionDetails: NutrientAcquisitionDetails[];
}
