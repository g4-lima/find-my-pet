import styled from 'styled-components';

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
      font-size: 24px;
      color: #222a36;
      cursor: pointer;
    }

    a + a {
      font-size: 16px;
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
    font-size: 96px;
    margin-bottom: 24px;
  }

  h3 {
    font-size: 36px;
  }
`;

export const Gallery = styled.div`
  height: 136px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;

  margin-top: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Description = styled.div`
  align-self: flex-start;
  font-family: 'Overpass', sans-serif;
  font-size: 20px;
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
  flex: 1;
  font-family: 'Roboto', sans-serif;
`;

export const MapButton = styled.button`
  cursor: pointer;
  position: realtive;
  width: 100%;
  height: 50vh;

  background: #222a36;

  p {
    position: absolute;
    max-width: 260px;
    top: 0;
    margin: 36px;
    color: #e4e0dc;
    font-size: 68px;
  }

  svg {
    right: 36px;
    top: 0px;
  }
`;

export const ReportButton = styled.button`
  width: 50%;
  height: 50vh;
  bottom: 0;

  background: #7ba8ff;

  p {
    color: #e4e0dc;
    font-size: 32px;
  }

  svg {
  }
`;

export const SearchButton = styled.button`
  width: 50%;
  height: 50vh;
  bottom: 0;
  right: 0;

  background: #31d08e;

  p {
    color: #e4e0dc;
    font-size: 32px;
  }
`;
