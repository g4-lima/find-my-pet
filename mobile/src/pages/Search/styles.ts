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
  background-color: #e4e0dc;
  height: 48px;
  width: 48px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  font-family: Roboto-Light;
  font-size: 24px;
  color: #e4e0dc;
  margin: auto;
  padding-right: 80px;
`;
