import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3rem 1rem;
  align-items: center;
  div.main {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.profile {
      display: flex;
      justify-content: space-between;
    }

    p.username {
      font-size: 1.5rem;
      color: var(--shape);
    }

    button.logout-btn {
      margin: 0 2rem;
      font-size: 1rem;
      color: var(--shape);
      background-color: var(--red);
      padding: 0 1rem;
      border: 0;
      border-radius: 0.25rem;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  div.newTransaction {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0 5rem;

    button.transaction-btn {
      font-size: 1rem;
      color: var(--shape);
      background: var(--blue-light);
      border: 0;
      border-radius: 0.25rem;
      padding: 0 2rem;
      height: 3rem;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;
