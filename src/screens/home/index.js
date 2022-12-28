import { useNavigation } from "@react-navigation/native";
// import Mulher from "./../../assets/mulher.svg";
import {
  Botao,
  Paragrafo,
  styles,
  TextoBotao,
  Titulo,
  Container,
} from "./styled";

export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      {/* <Mulher style={styles.imagem} /> */}
      <Titulo>Tutorial completo ✅</Titulo>
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
