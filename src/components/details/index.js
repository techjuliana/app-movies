import React from "react";
import { Text } from "react-native";
import {
  Container,
  ModalContainer,
  BtnVoltar,
  Titulo,
  Sinopse,
  Descricao,
  CapaFilme
} from "./styled";
export default function Details(props) {
  return (
    <Container>
      <ModalContainer>
        <BtnVoltar onPress={props.voltar}>
          <Text style={{ color: "#FFF", fontSize: 16 }}>Voltar</Text>
        </BtnVoltar>
        <Titulo>{props.filme.nome}</Titulo>
        <Sinopse>Sinopse:</Sinopse>
        <Descricao>{props.filme.sinopse}</Descricao>
        <CapaFilme source={{ uri: props.filme.foto }} />
      </ModalContainer>
    </Container>
  );
}
