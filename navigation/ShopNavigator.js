import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { ProductOverviewScreen } from "../screens/ProdactsOverviewScreen";
import { ProductDetailScreen } from "../screens/ProductDetailScreen";
import { theme } from "../theme";

const MyStackNavigator = createStackNavigator(
  {
    ProductsOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: { fontFamily: "OSR" },
      headerBackTitleStyle: { fontFamily: "OSR" },
      headerStyle: { backgroundColor: theme.color.primery },
      headerTintColor: "white",
    },
  }
);

export const ProductsStackNavigator = createAppContainer(MyStackNavigator);
