import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    marginLeft: 10,
    marginRight: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer:{
    height: '80%',
    backgroundColor: `${props => props.theme.black}`,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar:{
    backgroundColor: `${props => props.theme.red}`,
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  titulo:{
    textAlign: 'center',
    color: `${props => props.theme.white}`,
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  sinopse:{
    color: `${props => props.theme.white}`,
    fontSize: 18,
    marginBottom: 8,
    marginLeft: 10
  },
  descricao:{
    color: `${props => props.theme.white}`,
    marginLeft: 10,
    marginRight: 10,
  }
});
