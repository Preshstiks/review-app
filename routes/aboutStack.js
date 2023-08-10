import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";
import { styles } from "../style/styles";
import Header from "../shared/header";

export const AboutStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="About Gamezone"
        component={Home}
        options={({ route }) => ({
          headerTitle: () => <Header title={route.name} />,
        })}
      />
    </Stack.Navigator>
  );
};
