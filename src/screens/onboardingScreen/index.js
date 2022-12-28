import React from "react";
import { View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { TextBtn, ContainerBtn } from "./styled";
const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#09DA73" : "#0F732B";
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
          title: "Tudo em um só lugar",
          subtitle:
            "Os melhores games, lançamentos, novidades e tudo o que você precisa você vai ver aqui.",
        },
        {
          backgroundColor: "#141414",
          title: "Somos uma comunidade",
          subtitle:
            "Encontre outros jogadores com os mesmos interesses que você em uma comunidade ativa.",
        },
        {
          backgroundColor: "#141414",
          title: "Divirta-se",
          subtitle: "Entre para a maior comunidade de games do mundo.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
