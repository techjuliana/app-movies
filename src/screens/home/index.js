import { useNavigation } from "@react-navigation/native";
import { Botao, Paragrafo, TextoBotao, Titulo, Container } from "./styled";
import { Image } from "react-native";
export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
    <Image source={require('./../../assets/n.png')}  style={{width: 120, height: 130, margin:120}} />
      <Titulo>Seja bem-vindo(a)</Titulo>
      <Paragrafo>
        Entre para a maior comunidade de games do mundo e aproveite todas as
        oportunidades.
      </Paragrafo>
      <Botao onPress={() => navigation.navigate("movies")}>
        <TextoBotao>Entrar</TextoBotao>
      </Botao>
    </Container>
  );
}
