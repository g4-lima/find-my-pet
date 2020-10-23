import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  margin-right: 160px;
`;

export const FormContainer = styled.form`
  margin: 64px auto;
  width: 1200px;

  background: #ffff;
  border: 3px solid #d3e2d5;
  border-radius: 8px;
`;

export const MapContainer = styled.div`
  max-width: 1200px;
  margin-bottom: 32px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: normal;
    color: #222a36;
    margin: 16px 188px 16px;
  }

  .leaflet-container {
    border: 1px solid #d3e2e5;
    border-radius: 8px;
  }
`;

export const InputBlock = styled.div`
  width: 800px;
  margin: 8px auto;

  label {
    color: #222a36;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin: 16px 0 16px;
  }

  input {
    color: #222a36;
    width: 100%;
    background: #d3e2d5;
    border-radius: 8px;
    padding: 12px;
    border: solid 2px darkgray;
    margin-bottom: 16px;
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #222a36;
    &::placeholder {
      color: #666360;
      font-weight: 400;
      font-size: 16px;
    }
  }

  textarea {
    color: #222a36;
    width: 100%;
    background: #d3e2d5;
    border-radius: 8px;
    padding: 12px;
    border: solid 2px darkgray;
    height: 160px;
    margin-bottom: 16px;
    margin-top: 8px;

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #222a36;
    &::placeholder {
      color: #666360;
    }
  }

  .new-image {
    height: 80px;
    background: #d3e2d5;
    border: 1px dashed #222a36;
    border-radius: 8px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='file'] {
    visibility: hidden;
    margin: 0;
  }

  img {
    width: 100%;
    height: 96px;
    object-fit: cover;
    border-radius: 20px;
  }

  /* .images-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 16px;
  } */
`;

export const Button = styled.button`
  cursor: pointer;
  width: 200px;
  margin: 24px auto;
  padding: 24px;
  border-radius: 8px;
  background: #31d08e;
  color: #222a36;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-left: 800px;

  &:hover {
    background: ${shade(0.2, '#31d08e')};
  }
`;
