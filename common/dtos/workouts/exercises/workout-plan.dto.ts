/**
 * Ez az interfész egy felhasználó által készített vagy követett edzéstervet ír le.
 * Az edzéstervek segítenek a felhasználóknak strukturáltan és célorientáltan edzeni.
 */
type WorkoutPlanDTO = {
    /**
     * Egy egyedi azonosító, ami a specifikus edzéstervet azonosítja.
     */
    planId: number;
    /**
     * Az edzésterv neve. Ez egy rövid, jellemző cím vagy elnevezés, amely alapján a felhasználók könnyen azonosíthatják az edzéstervet.
     */
    name: string;
    /**
     * Egy részletes leírás az edzéstervről. Ez magyarázatot adhat az edzés céljáról, tartalmáról vagy a felhasználó által megjegyzett egyéb információkról.
     */
    description: string;
    /**
     * Egy egyedi azonosító, ami a felhasználót azonosítja.
     * Ez az azonosító jelzi, hogy melyik felhasználó készítette az adott edzéstervet.
     */
    creatorId: number;
}

export default WorkoutPlanDTO;
