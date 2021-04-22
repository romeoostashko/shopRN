export const ADD_ORDER = "ADD_ORDER";

export const addOrderAction = (cartItem, totalAmount) => {
  return {
    type: ADD_ORDER,
    orderData: { items: cartItem, amount: totalAmount },
  };
};
