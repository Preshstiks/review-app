import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={btnstyles.button}>
        <Text style={btnstyles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const btnstyles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "crimson",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
