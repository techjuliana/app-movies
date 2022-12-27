import { createNativeStackNavigator } from "@react-navigation/native-stack";
import movieList from "../screens/movieList";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="list"
        component={movieList}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: "Voltar",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#fff",
        }}
      /> */}
     
    </Stack.Navigator>
  );
}
