/**
 * Ez az interfész egy edzéstervhez rendelt gyakorlatot ír le.
 * A gyakorlatokat az edzéstervhez rendeléshez használjuk.
 * Egy edzéstervhez több gyakorlat is rendelhető.
 */ 
type WorkoutPlanExerciseDTO = {
  /**
   * Egy egyedi azonosító, ami egy specifikus edzéstervet azonosít.
   * Több gyakorlat is lehet ugyanahhoz az edzéstervhez rendelve,
   * ezért ez a mező jelzi, hogy melyik edzéstervhez tartozik a gyakorlat.
   */
  planId: number;
  /**
   * Egy egyedi azonosító, ami egy specifikus gyakorlatot azonosít.
   * Ezzel lehet linkelni a gyakorlatok közötti adatbázist a gyakorlat részleteihez.
   */
  exerciseId: number;
  /**
   * Ez a szám jelzi, hogy az adott gyakorlatot hány ismétléssel kell elvégezni egy adott szettben.
   * Például, ha a repetitions értéke 10, akkor a gyakorlatot 10-szer kell ismételni egy szett során.
   */
  repetitions: number;
  /**
   * Ez a szám jelzi, hány szettet kell elvégezni az adott gyakorlatból.
   * Például, ha a sets értéke 3, akkor a gyakorlatot háromszor kell elvégezni az előírt ismétlések számával.
   */
  sets: number;
  /**
   * A súly mennyisége, amellyel a gyakorlatot el kell végezni.
   * Ha egy gyakorlatot saját testsúllyal kell elvégezni, akkor ez az érték 0 lehet, vagy kihagyható a DTO-ból.
   * Más esetekben ez a súly lehet kilogrammban vagy más egységben kifejezve.
   */
  weightInKgs: number;
  /**
   * A szettek közötti pihenési időtartam másodpercekben kifejezve.
   */
  restPeriodInSecs: number;
};

export default WorkoutPlanExerciseDTO;