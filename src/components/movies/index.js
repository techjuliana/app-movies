import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { styles } from "./styled";
import Details from "../details";

export default function Movies({ data }) {
  const [visibleModal, setVisibleModal] = useState(false);

  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image source={{ uri: data.foto }} style={styles.capa} />

        <View style={styles.areaBotao}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setVisibleModal(true)}
          >
            <Text style={styles.botaoTexto}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal transparent={true} animationType="slide" visible={visibleModal}>
        <Details filme={data} voltar={() => setVisibleModal(false)} />
      </Modal>
    </View>
  );
}
