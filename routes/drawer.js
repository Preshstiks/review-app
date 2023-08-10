import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./homeStack";
import { AboutStack } from "./aboutStack";

const RootDrawerNavigation = createDrawerNavigator();

export const Drawer = () => {
  return (
    <NavigationContainer>
      <RootDrawerNavigation.Navigator initialRouteName="Home">
        <RootDrawerNavigation.Screen name="Home" component={HomeStack} />
        <RootDrawerNavigation.Screen name="About" component={AboutStack} />
      </RootDrawerNavigation.Navigator>
    </NavigationContainer>
  );
};
