import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { ItemProduct } from "../components/ItemProduct";
import * as cardActions from "../store/card/actions";

export const ProductOverviewScreen = ({ navigation }) => {
  const produts = useSelector((state) => state.products.availableProducts);
  const dispatch = useDispatch();
  const onViewDetail = (item) => {
    navigation.navigate("ProductDetail", {
      obj: item,
      title: item.title,
    });
  };

  return (
    <FlatList
      data={produts}
      renderItem={(data) => (
        <ItemProduct
          imageURL={data.item.imageURL}
          title={data.item.title}
          price={data.item.price}
          onViewDetail={() => {
            onViewDetail(data.item);
          }}
          onAddToCard={() => dispatch(cardActions.addToCard(data.item))}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

ProductOverviewScreen.navigationOptions = {
  title: "All products",
};
