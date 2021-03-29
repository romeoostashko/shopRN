import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableNativeFeedback,
} from "react-native";
import { theme } from "../theme";

export const ItemProduct = ({
  title,
  price,
  imageURL,
  onViewDetail,
  onAddToCard,
}) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback useForeground onPress={onViewDetail}>
        <View style={{ borderRadius: 10, overflow: "hidden", flex: 1 }}>
          <Image style={styles.image} source={{ uri: imageURL }} />
          <View style={styles.text}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>$ {price.toFixed(2)}</Text>
          </View>

          <View style={styles.actions}>
            <Button
              color={theme.color.primery}
              title="View details"
              onPress={onViewDetail}
            />
            <Button
              color={theme.color.primery}
              title="To cart"
              onPress={onAddToCard}
            />
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 5,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  title: {
    fontFamily: "OSB",
    fontSize: 14,
    marginVertical: 4,
  },
  price: { fontSize: 14, color: "#888", fontFamily: "OSR" },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text: {
    alignItems: "center",
  },
});
