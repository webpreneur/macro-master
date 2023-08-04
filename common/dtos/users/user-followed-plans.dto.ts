/**
 * UserFollowedPlansDTO írja le a kapcsolatot 
 * a felhasználók és az általuk követett edzéstervek között.
 * Minden egyes rekord ebben az interfészben 
 * egy egyedi kapcsolatot képvisel 
 * egy felhasználó és egy követett edzésterv között.
 */
type UserFollowedPlansDTO = {
    /**
     * A felhasználó egyedi azonosítója, aki követi az adott edzéstervet.
     */
    userId: number;
    /**
     * Az edzésterv egyedi azonosítója, amelyet a felhasználó követ.
     */
    planId: number;
    /**
     * A dátum és időpont, amikor a felhasználó elkezdte követni az edzéstervet.
     */
    followedDate: Date;
    unfollowedData: Date;
    notificationPreference: NOTIFICATION_PREFERENCE;
};

enum NOTIFICATION_PREFERENCE {
    NONE = 0,
    DAILY = 1,
    WEEKLY = 2,
}

export default UserFollowedPlansDTO;