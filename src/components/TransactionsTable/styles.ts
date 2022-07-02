import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 100%;
  h1 {
    margin: 2rem 0;
  }
  div.table {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 40rem;
    overflow: scroll;
  }
`;
