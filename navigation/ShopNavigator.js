import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { ProductOverviewScreen } from "../screens/ProdactsOverviewScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { CartScreen } from "../screens/CartScreen";
import { theme } from "../theme";
import { OrdersScreen } from "../screens/OrdersScreen";

const defaultNavigationOptions = {
  headerTitleStyle: { fontFamily: "OSR" },
  headerBackTitleStyle: { fontFamily: "OSR" },
  headerStyle: { backgroundColor: theme.color.primery },
  headerTintColor: "white",
};

const MyStackNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  { Orders: OrdersScreen },
  { defaultNavigationOptions: defaultNavigationOptions }
);

const SNavigator = createDrawerNavigator(
  {
    Products: MyStackNavigator,
    Orders: OrdersNavigator,
  },
  {
    defaultNavigationOptions: defaultNavigationOptions,
  }
);

export const ProductsStackNavigator = createAppContainer(SNavigator);
