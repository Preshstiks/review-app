import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import { ReviewDetails } from "../screens/reviewDetails";
import Header from "../shared/header";

export const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="GameZone"
        component={Home}
        options={({ route }) => ({
          headerTitle: () => <Header title={route.name} />,
        })}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
};
