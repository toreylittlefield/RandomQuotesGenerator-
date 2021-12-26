import React, { createContext, useState } from 'react';

export const UserContext = createContext({ auth: false, name: '', token: '', expires: '' });

const TwitterAuthProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ auth: false, name: '', token: '', expires: '' });

  // Login updates the user data with a name parameter
  const login = ({ name = '', token = '', expires = '' }) => {
    setUser((_) => ({
      expires,
      token,
      name,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logut = ({ name = '', token = '', expires = '' }) => {
    setUser((_) => ({
      expires,
      token,
      name,
      auth: false,
    }));
  };

  return <UserContext.Provider value={{ user, login, logut }}>{children}</UserContext.Provider>;
};

export default TwitterAuthProvider;
