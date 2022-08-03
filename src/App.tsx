import Modal from 'react-modal';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { Home } from './pages/Home';
import { LoginPage } from './pages/LoginPage';
import { Register } from './pages/Register';
import { TransactionsPage } from './pages/TransactionsPage';

Modal.setAppElement('#root');

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/transactions"
        element={
          <RequireAuth>
            <TransactionsPage />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
