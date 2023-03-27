import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
  goods: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: '',
  searchName: '',
  show: false,
  sortOrderPrice: 'Price ↓',
  sortOrderName: 'A-Z',
  imageShow: false,
  image: '',
  indexImage: '',
  currentPage: 1,
  shopPerPage: 24,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: 'CLOSE_ALERT' });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.decQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: 'ADD_TO_BASKET', payload: item });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: itemId } });
  };

  value.setGoods = (data) => {
    dispatch({ type: 'SET_GOODS', payload: data });
  };

  value.setBasketShow = (showBasket) => {
    dispatch({ type: 'SET_BASKETSHOW', payload: showBasket });
  };

  value.setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  value.setSearchName = (name) => {
    dispatch({ type: 'SET_SEARCHNAME', payload: name });
  };

  value.setShow = (show) => {
    dispatch({ type: 'SET_SHOW', payload: show });
  };

  value.setSortOrderPrice = (price) => {
    dispatch({ type: 'SET_SORT_ORDER_PRICE', payload: price });
  };

  value.setSortOrderName = (name) => {
    dispatch({ type: 'SET_SORT_ORDER_NAME', payload: name });
  };

  value.setImageShow = (image) => {
    dispatch({ type: 'SET_IMAGE_SHOW', payload: image });
  };

  value.setImage = (image) => {
    dispatch({ type: 'SET_IMAGE', payload: image });
  };

  value.setIndexImage = (index) => {
    dispatch({ type: 'SET_INDEX_IMAGE', payload: index });
  };

  value.selectImage = (selectedIndex) => {
    dispatch({ type: 'SELECT_IMAGE', payload: selectedIndex });
  };

  value.sortingPrice = (price) => {
    dispatch({ type: 'SORTING_PRICE', payload: price });
  };

  value.sortingRelevance = () => {
    dispatch({ type: 'SORTING_RELEVANCE' });
  };

  value.sortingName = (name) => {
    dispatch({ type: 'SORTING_NAME', payload: name });
  };

  value.setCurrentPage = (page) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  value.setShopPerPage = (page) => {
    dispatch({ type: 'SET_SHOP_PER_PAGE', payload: page });
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
