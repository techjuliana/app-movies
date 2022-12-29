import { StyleSheet } from "react-native";

import styled from "styled-components/native";

export const Card = styled.View`
border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border:0.5px ${(props) => props.theme.red};
  background-color: ${(props) => props.theme.red};
  margin: 15px;
`;

export const Capa = styled.Image`
  height: 250px;
  z-index: 2;
`;

export const Titulo = styled.Text`
  color: ${(props) => props.theme.white};
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const AreaBotao = styled.View`
  align-items: flex-end;
  margin-top: -45px;
  z-index: 9;
`;

export const Botao = styled.TouchableOpacity`
  width: 100px;
  background-color: ${(props) => props.theme.red};
  padding: 8px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const BotaoTexto = styled.Text`
  color: ${(props) => props.theme.white};
  text-align: center;
`;
