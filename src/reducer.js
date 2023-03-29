import { API_KEY, API_URL } from './config';

export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'SET_BASKETSHOW': {
      return {
        ...state,
        isBasketShow: payload,
      };
    }
    case 'SET_SEARCHNAME': {
      return {
        ...state,
        searchName: payload,
      };
    }
    case 'SET_SHOW': {
      return {
        ...state,
        show: payload,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        loading: payload,
      };
    }
    case 'SET_SORT_ORDER_NAME': {
      return {
        ...state,
        sortOrderName: payload,
      };
    }
    case 'SET_SORT_ORDER_PRICE': {
      return {
        ...state,
        sortOrderPrice: payload,
      };
    }
    case 'SET_IMAGE_SHOW': {
      return {
        ...state,
        imageShow: payload,
      };
    }
    case 'SET_IMAGE': {
      return {
        ...state,
        image: payload,
      };
    }
    case 'SET_INDEX_IMAGE': {
      return {
        ...state,
        indexImage: payload,
      };
    }
    case 'SET_SHOP_PER_PAGE': {
      return {
        ...state,
        shopPerPage: payload,
      };
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case 'TO_NEXT_PAGE': {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    }
    case 'TO_PREV_PAGE': {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    }
    case 'PAGINATE': {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case 'SELECT_IMAGE': {
      return {
        ...state,
        indexImage: payload,
      };
    }
    case 'ADD_TO_BASKET': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.mainId === payload.mainId
      );

      let newOrder = null;

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        order: state.order.map((el) => {
          if (el.mainId !== payload.id) {
            return el;
          }
          const newQuantity = el.quantity + 1;
          return {
            ...el,
            quantity: newQuantity,
          };
        }),
      };
    case 'DECREMENT_QUANTITY': {
      const orderItem = state.order.find((item) => item.mainId === payload.id);
      let newOrder = null;
      newOrder = state.order.map((el) => {
        if (el.mainId !== payload.id) {
          return el;
        }
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity,
        };
      });
      if (orderItem.quantity === 1) {
        newOrder = state.order.filter((el) => el.mainId !== payload.id);
      }
      return {
        ...state,
        order: newOrder,
      };
    }
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'SORTING_PRICE':
      let sorted = null;
      if (state.sortOrderPrice === 'Price ↓') {
        sorted = [...state.goods].sort((a, b) =>
          a[payload].finalPrice > b[payload].finalPrice ? 1 : -1
        );
        state.setSortOrderPrice('Price ↑');
      } else if (state.sortOrderPrice === 'Price ↑') {
        sorted = [...state.goods].sort((a, b) =>
          a[payload].finalPrice < b[payload].finalPrice ? 1 : -1
        );
        state.setSortOrderPrice('Price ↓');
      }
      return {
        ...state,
        goods: sorted,
      };
    case 'SORTING_NAME':
      let sorting = null;
      if (state.sortOrderName === 'A-Z') {
        sorting = [...state.goods].sort((a, b) =>
          a[payload].toLowerCase() > b[payload].toLowerCase() ? 1 : -1
        );

        state.setSortOrderName('Z-A');
      } else if (state.sortOrderName === 'Z-A') {
        sorting = [...state.goods].sort((a, b) =>
          a[payload].toLowerCase() < b[payload].toLowerCase() ? 1 : -1
        );
        state.setSortOrderName('A-Z');
      }
      return {
        ...state,
        goods: sorting,
      };
    case 'SORTING_RELEVANCE':
      fetch(API_URL, {
        headers: {
          Authorization: API_KEY,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          state.setGoods(data.shop);
        });
      return {
        ...state,
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    default:
      return state;
  }
}
