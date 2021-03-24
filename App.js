import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { Productsreducer } from "./store/products/reducer";
import { StyleSheet, Text, View } from "react-native";
const rootReducer = combineReducers({
  products: Productsreducer,
});
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
