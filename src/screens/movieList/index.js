import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import api from "./../../services/api";
import Movies from "../../components/movies";
import { styles } from "./styled";

export default function MovieList() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes");
      // console.log(response.data);
      setFilmes(response.data);
      setLoading(false);
    }

    loadFilmes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color="#121212" size={45} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Movies data={item} />}
        />
      </View>
    );
  }
}
