import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "../screens/movieList";
import OnboardingScreen from "./../screens/onboardingScreen";
import Home from "./../screens/home";
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="movies"
        component={MovieList}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack.Navigator>
  );
}
