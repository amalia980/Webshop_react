import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(true);

  const [user, setUser] = useState({firstname: "", lastname: ""})

  
  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

