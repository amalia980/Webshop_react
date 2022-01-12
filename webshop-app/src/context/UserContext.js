import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(true);
 
  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn}}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

