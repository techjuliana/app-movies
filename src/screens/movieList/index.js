import React, { useEffect, useState } from "react";
import { FlatList, ActivityIndicator, Image } from "react-native";

import api from "./../../services/api";
import Movies from "../../components/movies";
import { Container, Loading } from "./styled";
export default function MovieList() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <Loading>
        <ActivityIndicator color="#121212" size={45} />
      </Loading>
    );
  } else {
    return (
      <Container>
        <Image
          source={require("./../../assets/netflix.png")}
          style={{ width: 150, height: 70, marginLeft: 130 }}
        />
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Movies data={item} />}
        />
      </Container>
    );
  }
}
