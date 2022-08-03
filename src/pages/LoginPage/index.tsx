import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function LoginPage() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await auth.signin(email, password);
      if (isLogged) {
        navigate('/transactions');
      } else {
        alert('A autenticação falhou. Por favor confira e-mail e senha.');
      }
    } else {
      alert('Por favor informe e-mail e senha!');
    }
  };
  return (
    <>
      <Header />
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="example@example.com"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Logar</button>
    </>
  );
}
