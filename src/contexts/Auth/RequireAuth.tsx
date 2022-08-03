import { useContext } from 'react';
import { LoginPage } from '../../pages/LoginPage';
import { AuthContext } from './AuthContext';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <LoginPage />;
  }
  return children;
};
