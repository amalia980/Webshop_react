import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState({
    firstname: "", 
    lastname: "",
    password: "",
    address: "",
    city: "",
  });

  
  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn, user, setUser, }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
export default UserProvider;

