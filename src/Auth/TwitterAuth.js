import React, { createContext, useState } from 'react';

const initialState = { auth: false, name: '', token: '', expires: '', id: '', username: '', profile_image_url: '' };

export const UserContext = createContext({
  user: initialState,
  login: ({ name = '', token = '', expires = '', id = '', username = '', profile_image_url = '' }) => {},
  logout: () => {},
});

const TwitterAuthProvider = ({ children }) => {
  // User is the name of the "data" that gets stored in context
  const [user, setUser] = useState(initialState);

  // Login updates the user data with a name parameter
  const login = ({ name = '', token = '', expires = '', id = '', username = '', profile_image_url = '' }) => {
    setUser((_) => ({
      expires,
      token,
      name,
      id,
      username,
      profile_image_url,
      auth: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser(initialState);
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export default TwitterAuthProvider;
