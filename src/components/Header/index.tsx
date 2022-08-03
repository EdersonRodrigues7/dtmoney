import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal?: () => void | null;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await auth.signout();
    navigate('/');
  };
  const handleRequest = (req: string) => {
    req === 'login' ? navigate('/login') : navigate('/register');
  };
  return (
    <Container>
      <Content>
        <div className="main">
          <img src={logoImg} alt="dt money" />
          {auth.user && (
            <div className="profile">
              <p className="username">Olá {auth.user.name}!</p>
              <button className="logout-btn" onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
          {!auth.user && (
            <div className="credentials">
              <button className="logout-btn" onClick={() => handleRequest('login')}>
                Login
              </button>
              <button className="logout-btn" onClick={() => handleRequest('register')}>
                Register
              </button>
            </div>
          )}
        </div>
        {auth.user && (
          <div className="newTransaction">
            <button className="transaction-btn" type="button" onClick={onOpenNewTransactionModal}>
              Nova Transação
            </button>
          </div>
        )}
      </Content>
    </Container>
  );
}
