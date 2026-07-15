import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const user = {
    name: "Rahul",
    email: "rahul@gmail.com",
    membership: "Premium",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
