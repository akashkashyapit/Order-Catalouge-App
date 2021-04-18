import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_SIZE,
  ORDER_PRODUCTS_BY_PRICE,
  SEARCH_PRODUCTS_BY_NAME,
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS_BY_NAME:
      return {
        ...state,
        search: action.payload.search,
        filteredItems: action.payload.items,
      };
      case FILTER_PRODUCTS_BY_SIZE:
        return {
          ...state,
          size: action.payload.size,
          filteredItems: action.payload.items,
        };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    default:
      return state;
  }
};
