import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  max-width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border: 0;
  border-radius: 0.25rem;
  background-color: var(--shape);
  color: var(--text-body);
  div.card-header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 32rem;
    div.title {
      color: var(--text-title);
    }
    div.deposit {
      color: var(--green);
    }
    div.withdraw {
      color: var(--red);
    }
    div.title,
    div.deposit,
    div.withdraw {
      max-width: 16rem;
    }
  }
  div.card-data {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    width: 32rem;
    div.category,
    div.date {
      max-width: 16rem;
    }
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
