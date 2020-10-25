import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: 160px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin: 64px auto;
  width: 1200px;

  background: #ffff;
  border: 3px solid #d3e2d5;
  border-radius: 8px;

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #d3e2d5;
    margin: 1em 0;
    padding: 0;

    margin-top: 36px;
  }
`;

export const SearchOptions = styled.div`
  margin: 16px auto 0;
  width: 800px;

  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 16px;
`;

export const InputBlock = styled.div`
  margin: 8px auto 0;
  width: 100%;

  label {
    color: #222a36;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 16px 0;
  }

  input {
    color: #222a36;
    width: 100%;
    background: #d3e2d5;
    border-radius: 8px;
    padding: 12px;
    border: solid 2px darkgray;
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #222a36;
    &::placeholder {
      color: #666360;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

export const ListContainer = styled.div`
  margin: 16px auto 32px;
  width: 800px;
`;
