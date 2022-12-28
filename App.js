import React from "react";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import { tema } from "./src/theme/theme";
export default function App() {
  return (
    <ThemeProvider theme={tema}>
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </ThemeProvider>
  );
}
