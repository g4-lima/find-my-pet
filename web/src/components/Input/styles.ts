import styled from 'styled-components';

export const Container = styled.div`
  background: ##d3e2d5;
  border-radius: 8px;
  padding: 16px;
  width: 100%;

  border: solid 2px darkgray;
  color: #666360;
  display: flex;
  align-items: center;

  input {
    color: #222a36;
    &::placeholder {
      color: #666360;
    }
  }
`;
