import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${(props) => props.theme.black};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Imagem = styled.Image`
  margin-top: 50px;
`;

export const Titulo = styled.Text`
  color: ${(props) => props.theme.white};;
  font-size: 29px;
  text-align: center;
  font-weight: bold;
`;

export const Paragrafo = styled.Text`
  color: ${(props) => props.theme.gray};
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  margin: 30px;
  width: 300px;
`;

export const TextoBotao = styled.Text`
  color:${(props) => props.theme.white};
  font-weight: bold;
`;

export const Botao = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.red};
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  border-radius: 3px;
`;
