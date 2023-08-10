import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginVertical: 4,
    marginHorizontal: 6,
  },
  cardContent: {
    padding: 13,
  },
});

export default Card;
