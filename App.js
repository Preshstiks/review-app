import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import { styles } from "./style/styles";
import { Drawer } from "./routes/drawer";
import { HomeStack } from "./routes/homeStack";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [isLoaded] = useFonts({
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });
  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);
  if (!isLoaded) {
    return null;
  }
  return (
    <View onLayout={handleOnLayout} style={styles.container}>
      <Drawer />
      {/* <HomeStack /> */}
    </View>
  );
}
