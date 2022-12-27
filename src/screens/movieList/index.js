import React, { useEffect, useState} from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import api from './../../services/api';
import Movies from './../../components/movies';

export default function MovieList() {
  const [filmes, setFilmes] = useState([]);

  useEffect(()=> {

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
    }

    loadFilmes();

  }, []);
  

 return (
   <View style={styles.container}>
     <FlatList
     data={filmes}
     keyExtractor={ item => String(item.id) }
     renderItem={({ item }) => <Movies data={item} /> }
     />
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
