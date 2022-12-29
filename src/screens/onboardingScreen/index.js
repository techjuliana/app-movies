import React from "react";
import { View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";
import { TextBtn, ContainerBtn } from "./styled";
const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#E50815" : "#7C7A80";
  return (
    <View
      style={{
        width: 9,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <ContainerBtn {...props}>
    <TextBtn>Pular</TextBtn>
  </ContainerBtn>
);

const Next = ({ ...props }) => (
  <ContainerBtn {...props}>
    <TextBtn>Próximo</TextBtn>
  </ContainerBtn>
);

const Done = ({ ...props }) => (
  <ContainerBtn {...props}>
    <TextBtn>Finalizado</TextBtn>
  </ContainerBtn>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => navigation.replace("home")}
      onDone={() => navigation.navigate("home")}
      pages={[
        {
          backgroundColor: "#141414",
          image: <Image source={require('./../../assets/netflix.png')} style={{width: 220, height: 130, margin:20}}/>,
          title: "Tudo em um só lugar",

          subtitle:
            "Os melhores games, lançamentos, novidades e tudo o que você precisa você vai ver aqui.",
        },
        {
          backgroundColor: "#141416",
          image: <Image source={require('./../../assets/clap.png')} style={{width: 160, height: 150, margin:20}}/>,
          title: "Somos uma comunidade",
          subtitle:
            "Encontre outros jogadores com os mesmos interesses que você em uma comunidade ativa.",
        },
        {
          backgroundColor: "#141418",
          image: <Image source={require('./../../assets/popcorn.png')} style={{width: 160, height: 160, margin:20}}/>,
          title: "Divirta-se",
          subtitle: "Entre para a maior comunidade de games do mundo.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
