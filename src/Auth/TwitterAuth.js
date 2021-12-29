import React, { createContext, useState } from 'react';

export const UserContext = createContext({
  user: {
    auth: false,
    name: '',
    token: '',
    expires: '',
  },
  login: ({ name = '', token = '', expires = '' }) => {},
  logout: () => {},
});

const TwitterAuthProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState({ auth: false, name: '', token: '', expires: '' });

  // Login updates the user data with a name parameter
  const login = ({ name = '', token = '', expires = '' }) => {
    console.log({ name, token, expires, user });
    setUser((_) => ({
      expires,
      token,
      name,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = ({ name = '', token = '', expires = '' }) => {
    setUser((_) => ({
      expires,
      token,
      name,
      auth: false,
    }));
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export default TwitterAuthProvider;
