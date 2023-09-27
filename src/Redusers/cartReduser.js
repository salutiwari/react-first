const cartReduser = (action, state) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    console.log(product);
  }
  return state;
};

export default cartReduser;
