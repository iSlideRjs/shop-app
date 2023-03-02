export function reducer(state, { type, payload }) {
  switch (type) {
    case 'RETURN_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    default:
      return state;
  }
}
