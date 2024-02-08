import React, { useState } from "react";
import { user as data } from "../data";
const UserContext = React.createContext();
function UserProvider({ children }) {
  const [user, setUser] = useState(data);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };
