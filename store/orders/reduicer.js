import { ADD_ORDER } from "./actions";
import Order from "../../models/order";
const initialState = { orders: [] };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrder = new Order(
        new Date().toString(),
        action.orderData.items,
        action.orderData.amount,
        new Date()
      );
      console.log("red", newOrder);
      return { ...state, orders: [...state.orders, newOrder] };

    default:
      return state;
  }
};
