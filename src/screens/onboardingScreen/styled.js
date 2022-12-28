import styled from "styled-components/native";

export const ContainerBtn = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const TextBtn = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;
