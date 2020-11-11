import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #e4e0dc;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  background-color: #222a36;
`;

export const GoBackButton = styled.TouchableOpacity`
  background-color: #222a36;
  height: 40px;
  width: 40px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: Roboto-Light;
  font-size: 24px;
  color: #e4e0dc;
  margin: auto;
  padding-right: 80px;
`;
