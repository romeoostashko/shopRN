import { ADD_TO_CART, REMOVE_FROM_CART } from "./actions";
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
    case REMOVE_FROM_CART:
      const currentQty = state.items[action.id].quantety;
      if (currentQty > 1) {
        /* reduce it*/
        return {
          ...state,
          totalAmount:
            state.totalAmount -
            state.items[action.id].sum / state.items[action.id].quantety,
          items: {
            ...state.items,
            [action.id]: {
              ...state.items[action.id],
              quantety: state.items[action.id].quantety - 1,
            },
          },
        };
        console.log(" ", state);
      } else if (currentQty === 1) {
        //erase
        const updateCurrentItems = { ...state.items };
        delete updateCurrentItems[action.id];
        return { ...state, totalAmount: 0, items: updateCurrentItems };
      }

      console.log("item ", currentQty);

    default:
      return state;
  }
};
