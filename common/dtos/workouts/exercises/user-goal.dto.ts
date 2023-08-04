/**
 * Ez az interfész egy felhasználó által meghatározott edzési célt ír le.
 * A cél lehet egy konkrét gyakorlatra vonatkozó súly, ismétlésszám, stb.
 * Segít a felhasználónak nyomon követni és értékelni az előrehaladását.
 */
type UserGoalDTO = {
  /**
   * Egy egyedi azonosító, ami a specifikus edzési célt azonosítja.
   */
  goalId: number;
  /**
   * Egy egyedi azonosító, ami a felhasználót azonosítja.
   * Ez az azonosító lehetővé teszi, hogy több felhasználó is rendelkezzen saját egyedi célokkal.
   */
  userId: number;
  /**
   * Egy egyedi azonosító, ami egy specifikus gyakorlatot azonosít.
   * Ez a mező jelzi, hogy melyik gyakorlathoz kapcsolódik a cél.
   */
  exerciseId: number;
  /**
   * Ez a szám jelzi a gyakorlat célszámú ismétlését egy szettben.
   * Például, ha a repetitionsTarget értéke 10, akkor a felhasználó célja, hogy a gyakorlatot 10-szer ismételje egy szettben.
   */
  repetitionsTarget: number;
  /**
   * Ez a szám jelzi, hány szettet kíván a felhasználó elérni a gyakorlatból.
   * Például, ha a setsTarget értéke 3, akkor a felhasználó célja, hogy a gyakorlatot három szettben végezze el a meghatározott ismétlésszámmal.
   */
  setsTarget: number;
  /**
   * A súly mennyisége, amelyet a felhasználó célul tűzött ki maga elé a gyakorlatban.
   * Meghatározza a gyakorlat elvégzéséhez szükséges súlyt.
   */
  weightTargetInKgs: number;
  /**
   * A dátum, ameddig a felhasználó el szeretné érni a kitűzött célt.
   * Ez segít a felhasználónak a motiváció fenntartásában és a haladás nyomon követésében.
   */
  deadlineDate: Date;

  // other fields...
};

export default UserGoalDTO;
