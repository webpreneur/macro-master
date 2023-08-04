/**
 * UserCreatedPlansDTO írja le a kapcsolatot a felhasználók és általuk létrehozott edzéstervek között.
 * Minden egyes rekord ebben az interfészben egy egyedi kapcsolatot képvisel egy felhasználó és egy edzésterv között.
 */
type UserCreatedPlansDTO = {
  /**
   * A felhasználó egyedi azonosítója, aki az adott edzéstervet létrehozta.
   */
  userId: number;

  /**
   * Az edzésterv egyedi azonosítója, amelyet a felhasználó létrehozott.
   */
  planId: number;

  /**
   * A dátum és időpont, amikor a felhasználó létrehozta az edzéstervet.
   */
  createdDate: Date;

  // ... egyéb esetleges mezők ...
};

export default UserCreatedPlansDTO;
