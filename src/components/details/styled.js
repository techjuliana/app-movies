import styled from "styled-components/native";

export const Container = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  height: 50%;
  background-color: ${(props) => props.theme.black};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const BtnVoltar = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.red};
  padding: 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Titulo = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.white};
  padding: 10px;
  font-size: 28px;
  font-weight: bold;
`;

export const Sinopse = styled.Text`
  color: ${(props) => props.theme.white};
  font-size: 18px;
  margin-bottom: 8px;
  margin-left: 10px;
`;

export const Descricao = styled.Text`
  color: ${(props) => props.theme.white};
  margin-left: 10px;
  margin-right: 10px;
`;
