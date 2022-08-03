import { useState } from 'react';
import { TransactionsProvider } from '../../hooks/useTransactions';
import { NewTransactionModal } from '../../components/NewTransactionModal';

interface NewTransactionButtonProps {
  onOpenNewTransactionModal: () => void;
}

export function NewTransactionButton({ onOpenNewTransactionModal }: NewTransactionButtonProps) {
  return (
    <button className="transaction-btn" type="button" onClick={onOpenNewTransactionModal}>
      Nova Transação
    </button>
  );
}
