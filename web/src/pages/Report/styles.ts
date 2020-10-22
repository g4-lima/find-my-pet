import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: 160px;
`;

export const FormContainer = styled.div`
  margin: 64px auto;
  width: 90%;

  background: #ffff;
  border: 3px solid #d3e2d5;
  border-radius: 8px;
`;

export const MapContainer = styled.div`
  width: 80vw;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    color: #222a36;
    padding: 12px;
  }

  .leaflet-container {
    border: 1px solid #d3e2e5;
    border-radius: 8px;
  }
`;
