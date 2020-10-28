import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  border: 1px solid #d3e2d5;
  border-radius: 8px;
  background: #fafafa;
  height: 320px;

  display: flex;
  flex-direction: row;

  & {
    margin-bottom: 32px;
  }

  img {
    width: 320px;
    height: 100%;

    border-radius: 8px 0 0 8px;
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

      h2 {
        margin-bottom: 16px;
      }

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
      padding: 16px 16px 0 0;
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
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: #222a36;
      background: #31d08e;
      border-radius: 0 0 8px 0;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
      line-height: 64px;
      margin-top: 14px;

      &:hover {
        background: ${shade(0.1, '#31d08e')};
      }
    }
  }
`;
