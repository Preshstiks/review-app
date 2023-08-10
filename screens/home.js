import {
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "../style/styles";
import { useState } from "react";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm";
import uuid from "react-native-uuid";
const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem ipsum",
      key: 1,
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "Lorem ipsum",
      key: 2,
    },
    { title: 'Not So "Final" Fantasy', rating: 3, body: "Lorem ipsum", key: 3 },
  ]);
  const addReviews = (review) => {
    review.key = uuid.v4();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={styles.screenContainer}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={ministyle.modalContent}>
            <MaterialIcons
              name="close"
              onPress={() => setModalOpen(false)}
              style={{ ...ministyle.toggle, ...ministyle.close }}
              size={24}
              color="black"
            />
            <ReviewForm addReviews={addReviews} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        style={ministyle.toggle}
        onPress={() => setModalOpen(true)}
        size={24}
        color="black"
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={styles.text}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const ministyle = StyleSheet.create({
  toggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  close: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
