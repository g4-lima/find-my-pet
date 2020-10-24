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
  }

  .map-popup img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
