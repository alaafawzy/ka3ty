import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Optional: Fetch initial login state from local storage or API
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    setIsLoggedIn(!!storedUser); // Convert to boolean
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
