import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #222a36;
  height: 8%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #e4e0dc;
  margin: auto;
`;

export const BottomBar = styled.View`
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
  background-color: black;
  flex-direction: row;
`;

export const MapButtom = styled.Button`
  height: 100%;
  background-color: blue;
`;

export const ReportButtom = styled.Button`
  height: 100%;
  background-color: blue;
`;

export const SearchButtom = styled.Button`
  height: 100%;
  background-color: blue;
`;
