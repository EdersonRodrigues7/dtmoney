import { createContext, useEffect, useState, useContext, ReactNode } from 'react';
import { api } from '../services/api';
import { AuthContext } from '../contexts/Auth/AuthContext';

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
  user_id: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt' | 'user_id'>;

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    api.get('http://localhost:3332/transactions').then(response => setTransactions(response.data));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('http://localhost:3332/transactions', {
      ...transactionInput,
      createdAt: new Date().toISOString(),
      user_id: auth.user?.id
    });

    const transaction = response.data;

    setTransactions([...transactions, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}
