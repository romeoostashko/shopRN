import React from "react";
import { useDispatch } from "react-redux";
import * as cardActions from "../store/cart/actions";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { theme } from "../theme";

export const ProductDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const obj = navigation.getParam("obj");
  console.log(obj);

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: obj?.imageURL }} />
      <View style={styles.button}>
        <Button
          color={theme.color.primery}
          title="Add to cart"
          onPress={() => dispatch(cardActions.addToCard(obj))}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>{obj?.title}</Text>
        <Text style={styles.price}>$ {obj?.price}</Text>
        <Text style={styles.description}>{obj?.description}</Text>
      </View>

      <View style={styles.actions}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    elevation: 5,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",

    justifyContent: "flex-start",
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontFamily: "OSB",
    fontSize: 24,
    marginVertical: 4,
  },
  price: { fontSize: 20, color: "#888" },
  description: { fontSize: 16, marginHorizontal: 15, fontFamily: "OSR" },

  text: {
    alignItems: "center",
  },
  button: { marginVertical: 20, alignItems: "center" },
});

ProductDetailScreen.navigationOptions = ({ navigation }) => {
  return { title: navigation.getParam("title") };
};
