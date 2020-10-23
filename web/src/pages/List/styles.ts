import styled from 'styled-components';
import { shade } from 'polished';

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

export const Card = styled.div`
  border: 1px solid #d3e2d5;
  border-radius: 8px;
  background: #fafafa;
  height: 320px;

  display: flex;
  flex-direction: row;

  img {
    width: 260px;
    height: 100%;

    border-radius: 8px 0 0 8px;
    border: 1px solid #d3e2d5;
    object-fit: cover;
  }

  .details {
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    color: #222a36;
    width: 100%;
    justify-content: space-between;

    .infos {
      width: 400px;
      height: 240px;
      padding: 16px;

      p {
        height: 160px;
        margin-top: 8px;
      }

      p + p {
        height: fit-content;
        color: #707070;
        font-size: 14px;
      }
    }

    .location {
      display: flex;
      padding: 16px;
      align-items: baseline;
      margin-right: 8px;

      h3 {
        font-size: 14px;
      }

      svg {
        margin-right: 4px;
        margin-top: 4px;
      }
    }
  }

  .card-box {
    display: flex;
    flex-direction: column;
    width: 100%;

    button {
      height: 64px;
      margin-top: 16px;
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: #222a36;
      background: #31d08e;
      border-radius: 0 0 8px 0;
      cursor: pointer;

      &:hover {
        background: ${shade(0.1, '#31d08e')};
      }
    }
  }
`;
