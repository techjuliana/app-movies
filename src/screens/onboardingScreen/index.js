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
          title: "Assista quando quiser.",

          subtitle:
            "Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.",
        },
        {
          backgroundColor: "#141416",
          image: <Image source={require('./../../assets/clap.png')} style={{width: 160, height: 150, margin:20}}/>,
          title: "Crie perfis para crianças.",
          subtitle:
            "Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.",
        },
        {
          backgroundColor: "#141418",
          image: <Image source={require('./../../assets/popcorn.png')} style={{width: 160, height: 160, margin:20}}/>,
          title: "Aproveite na TV.",
          subtitle: "Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
