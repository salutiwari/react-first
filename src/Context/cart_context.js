import { createContext, useContext, useReducer } from "react";
import cartReduser from "../Redusers/cartReduser";
const cartContext = createContext();
const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 5000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReduser, initialState);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: (id, color, amount, product) });
  };
  return (
    <cartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

const usecartContext = () => {
  return (useContext = cartContext);
};

export { CartProvider, usecartContext };
