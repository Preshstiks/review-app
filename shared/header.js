import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Header = ({ title }) => {
  return (
    <ImageBackground
      source={require("../assets/game_bg.png")}
      style={styles.header}
      resizeMode="cover"
    >
      <View style={styles.headerContent}>
        <Ionicons name="game-controller" size={24} color="maroon" />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headerText: {
    // fontWeight: "bold",
    fontSize: 22,
    color: "#333",
    letterSpacing: 1,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});

export default Header;
