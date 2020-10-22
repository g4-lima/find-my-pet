import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 56%;
`;

export const Header = styled.div`
  display: flex;

  margin-top: 32px;
  margin-bottom: 48px;
  width: 80%;
  align-self: center;
  align-items: center;
  justify-content: space-between;

  svg {
  }

  div {
    display: flex;
    flex-direction: column;

    align-items: center;

    a {
      font-family: 'Overpass', sans-serif;
      font-size: 20px;
      color: #222a36;
      cursor: pointer;
      text-decoration: none;
    }

    a + a {
      font-size: 14px;
      color: #707070;
      margin-top: 8px;
    }
  }
`;

export const Box = styled.div`
  width: 60%;
  align-self: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 48px;
  margin-top: 32px;
`;

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  color: #222a36;
  font-weight: bold;
  align-self: flex-start;

  h1 {
    font-size: 80px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Gallery = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  margin-top: 48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  align-self: flex-start;
  font-family: 'Overpass', sans-serif;
  font-size: 14px;
  line-height: 20px;
  color: #707070;

  margin-top: 64px;

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #7ba8ff;
    margin: 1em 0;
    padding: 0;

    margin-top: 36px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: 'Roboto', sans-serif;

  .map-button {
    text-decoration: none;
    cursor: pointer;
    position: realtive;
    width: 100%;
    height: 50vh;

    background: #222a36;

    &:hover {
      background: ${shade(0.2, '#222a36')};
    }

    p {
      max-width: 200px;
      margin: 60px;
      margin-bottom: 260px;
      color: #e4e0dc;
      font-size: 60px;
      line-height: 50px;
      text-align: start;
    }

    svg {
      position: absolute;
      right: 5vw;
      top: 15vh;
    }
  }
`;

export const HorizontalButtons = styled.div`
  display: flex;
  flex: 1;
  font-family: 'Roboto', sans-serif;

  .report-button {
    cursor: pointer;
    position: realtive;
    width: 50%;
    height: 50vh;
    bottom: 0;

    background: #7ba8ff;

    &:hover {
      background: ${shade(0.1, '#7ba8ff')};
    }

    p {
      color: #e4e0dc;
      font-size: 40px;
      position: absolute;
      text-align: end;
      max-width: 260px;
      margin: 40px;
      bottom: 8vh;
    }

    svg {
      position: absolute;
      right: 36vw;
      bottom: 36vh;
    }
  }

  .search-button {
    cursor: pointer;
    position: realtive;
    width: 50%;
    height: 50vh;
    bottom: 0;
    right: 0;

    background: #31d08e;

    &:hover {
      background: ${shade(0.1, '#31d08e')};
    }

    p {
      color: #e4e0dc;
      font-size: 40px;
      position: absolute;
      text-align: end;
      max-width: 260px;
      margin: 40px;
      bottom: 8vh;
    }

    svg {
      position: absolute;
      right: 14vw;
      bottom: 36vh;
    }
  }
`;
