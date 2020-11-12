import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TopBar = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #222a36;
  height: 4%;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #e4e0dc;
  margin: auto;
  font-family: 'Roboto-Light';
`;

export const BottomBar = styled.View`
  position: absolute;
  width: 100%;
  height: 16%;
  bottom: 0;
  flex-direction: row;
`;

export const MapButtom = styled.TouchableOpacity`
  height: 100%;
  width: 33.33%;
  background-color: #222a36;
`;

export const MapButtonTitle = styled.Text`
  color: #e4e0dc;
  font-size: 18px;
  font-family: 'Roboto-Light';
  margin-left: 16px;
  margin-top: 8px;
`;

export const ReportButtom = styled.TouchableOpacity`
  height: 100%;
  width: 33.33%;
  background-color: #5494cf;
`;

export const ReportButtonTitle = styled.Text`
  color: #e4e0dc;
  font-size: 18px;
  font-family: 'Roboto-Light';
  margin-left: 16px;
  margin-top: 8px;
`;

export const SearchButtom = styled.TouchableOpacity`
  height: 100%;
  width: 33.33%;
  background-color: #31d08e;
`;

export const SeacrhButtonTitle = styled.Text`
  color: #e4e0dc;
  font-size: 18px;
  font-family: 'Roboto-Light';
  margin-left: 16px;
  margin-top: 8px;
`;
