import { ADD_TO_CART } from "./actions";
import CardItem from "../../models/card-item";

const initialState = {
  items: {},
  totalAmount: 0,
};

export const addToCardreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let CItem;
      if (state.items[addedProduct.id]) {
        //already have the item in the card
        CItem = new CardItem(
          state.items[addedProduct.id].quantety + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        CItem = new CardItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: CItem },
        totalAmount: state.totalAmount + prodPrice,
      };

    default:
      return state;
  }
};
