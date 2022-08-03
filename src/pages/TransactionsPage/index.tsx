import { useState } from 'react';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { Dashboard } from '../../components/Dashboard';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';

export function TransactionsPage() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionsProvider>
  );
}
