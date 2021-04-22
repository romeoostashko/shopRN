import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { CustomHeaderButton } from "../components/UI/HeaderButton";

export const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);
  console.log(orders);
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => {
        return <Text>{item.totalAmount}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

OrdersScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Orders",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          item="Menu"
          iconName="md-menu"
          onPress={() => navigation.toggleDrawer()}
        ></Item>
      </HeaderButtons>
    ),
  };
};
