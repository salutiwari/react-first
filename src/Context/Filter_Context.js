import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";
import FilterReducer from "../Redusers/FilterReducers";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  sorting_value: "lowest",
  grid_view: true,
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};
// global provider fuction
export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(FilterReducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };
  // TO SET THE VIEW LIST
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
  // SORTING FUNCTION

  // const sorting = () => {
  //   dispatch({ type: "GET_SORT_VALUE" });
  // };

  // sorting function ( with the help of event object)

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  //UPDATE THE VALUE FILTERS

  const updateFiltervalue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };
  //  TO CLEAR THE FILTERS
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  //TO SORT THE PRODUCTS
  useEffect(() => {
    dispatch({ type: " FILTER_PRODUCTS" });
    dispatch({ type: " SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFiltervalue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
//  CUSTOM HOOK
export const useFilterContext = () => {
  return useContext(FilterContext);
};
