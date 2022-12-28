import React, { useState } from "react";
import { View, Modal } from "react-native";
import Details from "../details";
import { BotaoTexto, Card, Titulo, Capa, AreaBotao, Botao } from "./styled";
export default function Movies({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <Card>
        <Titulo>{data.nome}</Titulo>
        <Capa source={{ uri: data.foto }} />
        <AreaBotao>
          <Botao onPress={() => setVisibleModal(true)}>
            <BotaoTexto>LEIA MAIS</BotaoTexto>
          </Botao>
        </AreaBotao>
      </Card>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Details filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}
