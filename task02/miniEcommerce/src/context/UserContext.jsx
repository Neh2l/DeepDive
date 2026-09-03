import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id]
    );
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}