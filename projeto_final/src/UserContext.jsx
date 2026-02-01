import React from "react";
import { USER_GET, TOKEN_POST } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    try {
      const {url, options} = USER_GET(token);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`User fetch failed: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
      setLogin(true);
      setLoading(false);
      console.log(json);
    } catch (err) {
      console.error('getUser error:', err);
      setError(err.message);
      setLoading(false);
    }
  }

  async function userLogin(username, password) {
    try {
      setLoading(true);
      setError(null);
      const {url, options} = TOKEN_POST({username, password});
      const tokenResponse = await fetch(url, options);
      if (!tokenResponse.ok) {
        throw new Error(`Auth failed: ${tokenResponse.status}`);
      }
      const {token} = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
    } catch (err) {
      console.error('userLogin error:', err);
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <UserContext.Provider value={{ userLogin, data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};