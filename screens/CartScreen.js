import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../theme";

export const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const cartArrayItems = Object.entries(state.cart.items);
    return cartArrayItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.amount}>
        <Text style={styles.textAmount}>
          Total: ${cartTotalAmount.toFixed(2)}
        </Text>
        <Button title="order now" disabled={cartItems.length === 0} />
      </View>
      <FlatList
        data={cartItems}
        ItemSeparatorComponent={() => (
          <Text>---------------------------------------------------------</Text>
        )}
        keyExtractor={(item) => Math.random()}
        renderItem={({ item }) => {
          return (
            <View style={styles.items}>
              <View style={{ flex: 0.7 }}>
                <Text>{item[1].productTitle}</Text>
              </View>
              <View style={{ flex: 0.2 }}>
                <Text style={{ textAlign: "right" }}>
                  {item[1].productPrice}
                </Text>
              </View>
              <View style={{ flex: 0.1 }}>
                <Text style={{ textAlign: "right" }}>{item[1].quantety}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { margin: 20 },
  amount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  items: {
    flexDirection: "row",

    flex: 1,
  },
  textAmount: { fontFamily: theme.font["OpenSans-Bold"], fontSize: 20 },
});
