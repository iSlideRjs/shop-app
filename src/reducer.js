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
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    default:
      return state;
  }
}
