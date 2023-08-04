/**
 * Ez az interfész egy felhasználó által elvégzett edzési naplóbejegyzést ír le.
 * A naplóbejegyzések segítenek a felhasználónak nyomon követni az elvégzett gyakorlatait, a használt súlyt, ismétléseket és szetteket.
 */
type UserLogDTO = {
    /**
     * Egy egyedi azonosító, ami a specifikus naplóbejegyzést azonosítja.
     */
    logId: number;
    /**
     * Egy egyedi azonosító, ami a felhasználót azonosítja.
     * Ez az azonosító lehetővé teszi, hogy több felhasználó is rendelkezzen saját egyedi naplóbejegyzésekkel.
     */
    userId: number;
    /**
     * Egy egyedi azonosító, ami egy specifikus gyakorlatot azonosít.
     * Ez a mező jelzi, hogy melyik gyakorlatot végezte el a felhasználó az adott naplóbejegyzésben.
     */
    exerciseId: number;
    /**
     * Ez a szám jelzi, hány ismétlést végzett el a felhasználó az adott gyakorlatból egy adott szettben.
     */
    repetitionsCompleted: number;
    /**
     * Ez a szám jelzi, hány szettet végzett el a felhasználó az adott gyakorlatból.
     */
    setsCompleted: number;
    /**
     * A súly mennyisége, amelyet a felhasználó használt az adott gyakorlat elvégzésekor.
     */
    weightUsedInKgs: number;
    /**
     * A dátum, amikor a felhasználó elvégezte a gyakorlatot.
     * Ez segít a felhasználónak áttekinteni, melyik napon mit végzett el és nyomon követni az előrehaladását.
     */
    date: Date;
    /**
     * A felhasználó által megadott visszajelzés a gyakorlatról.
     * Ez segít a felhasználónak értékelni a gyakorlatot és a saját teljesítményét.
     * Például, ha a felhasználó úgy érzi, hogy a gyakorlat túl könnyű vagy nehéz volt, akkor ezt itt megjegyezheti.
     * A visszajelzés lehet pozitív vagy negatív is.
     */
    feedback?: string;

}

export default UserLogDTO;
