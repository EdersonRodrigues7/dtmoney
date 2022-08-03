import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { User } from '../../types/User';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const api = useApi();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if (storageData) {
        const data = await api.validateToken(storageData);
        // data.user && setUser(data.user);
        if (data.user) {
          setUser(data.user);
        }
      } else {
        setUser(null);
      }
    };
    validateToken();
  }, [api]);

  const register = async (name: string, email: string, password: string) => {
    const data = await api.register(name, email, password);
    if (data.user && data.token) {
      return true;
    }
    return false;
  };

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      setToken(data.token);
      return true;
    }
    return false;
  };
  const signout = async () => {
    const storageData = localStorage.getItem('authToken'); //Lembrar de enviar token no logout
    await api.signout();
    setUser(null);
    setToken('');
  };

  const setToken = (token: string) => {
    localStorage.setItem('authToken', token);
  };
  return (
    <AuthContext.Provider value={{ user, signin, signout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
