import { StyleSheet, Text, View } from "react-native";
import { styles } from "../style/styles";
import Card from "../shared/card";
import { Entypo } from "@expo/vector-icons";

export const ReviewDetails = ({ route }) => {
  const items = route.params;
  const ratingIcons = [];
  for (let i = 0; i < items.rating; i++) {
    ratingIcons.push(<Entypo key={i} name="star" size={24} color="#F6BE00" />);
  }
  return (
    <View style={styles.screenContainer}>
      <Card>
        <Text>{items.title}</Text>
        <Text>{items.body}</Text>
        <View style={styles.rating}>{ratingIcons}</View>
      </Card>
    </View>
  );
};
