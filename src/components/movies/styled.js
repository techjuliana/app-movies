import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card:{
    backgroundColor: `${props => props.theme.black}`,
    margin: 15,
    elevation: 2
  },
  capa:{
    height: 250,
    zIndex:2,
  },
  titulo:{
    padding: 15,
    fontSize: 18
  },
  areaBotao:{
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  botao:{
    width: 100,
    backgroundColor: `${props => props.theme.red}`,
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  botaoTexto:{
    color: `${props => props.theme.white}`,
    textAlign: 'center'
  }
});
