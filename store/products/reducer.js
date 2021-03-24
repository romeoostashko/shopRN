import { PRODUCTS } from "../../data/dammy-data";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export const Productsreducer = (state = initialState, action) => {
  return state;
};
