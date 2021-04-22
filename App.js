import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { Productsreducer } from "./store/products/reducer";
import { StyleSheet } from "react-native";
import { ProductsStackNavigator } from "./navigation/ShopNavigator";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { addToCardreducer } from "./store/cart/reducer";
import { orderReducer } from "./store/orders/reduicer";

const rootReducer = combineReducers({
  products: Productsreducer,
  cart: addToCardreducer,
  orders: orderReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default function App() {
  let [fontsLoaded] = useFonts({
    OSB: require("./assets/fonts/OpenSans-Bold.ttf"),
    OSR: require("./assets/fonts/OpenSans-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ProductsStackNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
