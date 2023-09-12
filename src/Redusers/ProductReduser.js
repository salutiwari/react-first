const ProductReduser = (state, action) => {
  // if (action.type === "SET-LOADING") return { ...state, isloading: true };
  // if (action.type === "SET-ERROR")
  //   return {
  //     ...state,
  //     isLoading: false,
  //     isError: true,
  //   };

  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isloading: true };

    case "SET_API_DATA":
      const featureData = action.payload.filter((newElement) => {
        return newElement.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProduct: featureData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return { ...state, isSingleloading: true };

    case "SET_SINGLE_PRODUCT":
      return { ...state, isSingleloading: true, singleProduct: action.payload };
    case "SET_SINGLE_ERROR":
      return { ...state, isSingleloading: false, isError: true };

    default:
      return state;
  }
};
export default ProductReduser;
