import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  headertitle: {
    color: "white",
    fontSize: 20,
  },
  rating: {
    gap: 3,
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 6,
  },
});
