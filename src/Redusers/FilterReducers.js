const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => {
        return curElem.price;
      });
      // 3RD WAY
      // let maxVal = priceArr.reduce((accum, curElem) => {
      //   return Math.max(accum, curElem);
      // }, 0);

      // console.log(maxVal);

      // 2ND WAY
      let maxPrice = Math.max(...priceArr);

      // 1ST WAY
      // console.log(Math.max.apply(null, priceArr));
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
        },
      };

    case "SET_GRID_VIEW":
      return { ...state, grid_view: true };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProducts = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };

      newSortData = tempSortProduct.sort(sortingProducts);
      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case " FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];

      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }
      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }

      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }

      if (price) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.price <= price;
        });
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: 0,
          // minPrice: "state.filters.maxPrice",
          // price: "state.filters.maxPrice",
          minPrice: 0,
          price: 0,
        },
      };
    default:
      return state;
  }
};

// case "GET_SORT_VALUE":
//   let userSortValue = document.getElementById("sort");
//   let sort_value = userSortValue.options[userSortValue.selectedIndex].value;

//   return {
//     ...state,
//     sorting_value: action.payload,
//   };

// case " SORTING_PRODUCTS":
//   let newSortData;
//   let tempSortProduct = [...action.payload];

//   if (state.sorting_value === "lowest") {
//     const sortingProducts = (a, b) => {
//       return a.price - b.price;
//     };
//     newSortData = tempSortProduct.sort(sortingProducts);
//   }

//   if (state.sorting_value === "highest") {
//     const sortingProducts = (a, b) => {
//       return b.price - a.price;
//     };
//     newSortData = tempSortProduct.sort(sortingProducts);
//   }
//   if (state.sorting_value === "a-z") {
//     newSortData = tempSortProduct.sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//   }
//   if (state.sorting_value === "z-a") {
//     newSortData = tempSortProduct.sort((a, b) =>
//       b.name.localeCompare(a.name)
//     );
//   }

//   return {
//     ...state,
//     filter_products: newSortData,
//   };
export default FilterReducer;
