import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-right: 160px;

  .leaflet-container {
    z-index: 0;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: #e4e0dc;
    border-radius: 4px;
    border: 1px solid #222a36;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #222a36;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    margin: 4px;
  }

  .map-popup img {
    width: 56px;
    height: 56px;
    object-fit: cover;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
