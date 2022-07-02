import { useTransactions } from '../../hooks/useTransactions';
import { TransactionCard } from '../TransactionCard';
import { Container } from './styles';

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <h1>Resumo de Transações</h1>
      <div className="table">
        {transactions.map(transaction => {
          return (
            <TransactionCard
              key={transaction.id}
              id={transaction.id}
              title={transaction.title}
              type={transaction.type}
              category={transaction.category}
              amount={transaction.amount}
              createdAt={transaction.createdAt}
            />
          );
        })}
      </div>
    </Container>
  );
}
