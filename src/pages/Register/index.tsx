import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

export function Register() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (name && email && password) {
      const success = await auth.register(name, email, password);
      if (success) {
        await auth.signin(name, email);
        navigate('/transactions');
      }
    } else {
      alert('Todos os campos são obrigatórios!');
    }
  };

  return (
    <>
      <h1>Crie sua conta</h1>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
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
        placeholder="Insira sua senha"
      />
      <button onClick={handleRegister}>Logar</button>
    </>
  );
}
