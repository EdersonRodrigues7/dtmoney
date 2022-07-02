import { Container } from './styles';

interface TransactionCardProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionCard({
  id,
  title,
  type,
  category,
  amount,
  createdAt
}: TransactionCardProps) {
  return (
    <Container>
      <div className="card-header">
        <div className="title">{title}</div>
        <div className={type}>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(amount)}
        </div>
      </div>
      <div className="card-data">
        <div className="category">{category}</div>
        <div className="date">{new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}</div>
      </div>
    </Container>
  );
}
