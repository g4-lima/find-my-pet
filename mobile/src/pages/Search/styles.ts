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

export const Card = styled.View`
  background-color: #fff;
  width: 95%;
  height: 520px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 240px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Infos = styled.View``;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PetName = styled.Text`
  font-family: Roboto-Bold;
  font-size: 32px;
  margin-left: 8px;
  color: #222a36;
`;

export const Location = styled.Text`
  color: #707070;
  font-family: Roboto-Bold;
  margin-right: 16px;
  font-size: 12px;
`;

export const CardBody = styled.View`
  margin: 8px;
`;

export const DescriptionTitle = styled.Text`
  font-family: Roboto-Light;
  color: #707070;
  font-size: 12px;
  margin-top: 12px;
  margin-bottom: 4px;
`;

export const Description = styled.Text`
  font-family: Roboto-Regular;
  color: #222a36;
  font-size: 16px;
  height: 80px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Responsible = styled.Text`
  font-family: Roboto-Light;
  color: #707070;
  font-size: 13px;
`;

export const WhatsappButton = styled.TouchableOpacity`
  width: 160px;
  height: 48px;
  border-radius: 4px;
  background-color: green;
`;

export const ShowButton = styled.TouchableOpacity`
  margin: auto;
  padding-top: 8px;
`;
