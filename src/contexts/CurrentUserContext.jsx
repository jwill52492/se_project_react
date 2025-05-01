import { createContext } from "react";

const CurrentUserContext = createContext();

<CurrentUserContext.Provider value={{ currentUser, isLoggedIn, handleLogout }}>
  <div className="page">
  </div>
</CurrentUserContext.Provider>

export default CurrentUserContext;