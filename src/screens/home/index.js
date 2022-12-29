import { useNavigation } from "@react-navigation/native";
import { Botao, Paragrafo, TextoBotao, Titulo, Container } from "./styled";
import { Image } from "react-native";
export default function Home() {
  const navigation = useNavigation();
  return (
    <Container>
      <Image
        source={require("./../../assets/n.png")}
        style={{ width: 120, height: 130, margin: 120 }}
      />
      <Titulo>Filmes, séries e muito mais. Sem limites.</Titulo>
      <Paragrafo>
        Assista onde quiser. Cancele quando quiser. Quer assistir? Informe seu
        email para criar ou reiniciar sua assinatura.
      </Paragrafo>
      <Botao onPress={() => navigation.navigate("movies")}>
        <TextoBotao>Vamos lá</TextoBotao>
      </Botao>
    </Container>
  );
}
