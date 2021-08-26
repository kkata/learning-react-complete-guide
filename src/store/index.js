import { createStore } from "redux";

// const item = {
//   id: 1,
//   title: "",
//   price: 0,
//   total: 0,
//   quantity: 0,
// };
const initialState = [];

const cartReducer = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    const targetId = action.payload.id;
    const hasSameItem = (id, items) => items.some((item) => item.id === id);

    if (hasSameItem(targetId, state)) {
      return state.map((item) => {
        return item.id === targetId
          ? {
              ...item,
              total: item.total + action.payload.price,
              quantity: item.quantity + 1,
            }
          : item;
      });
    }
    return [
      ...state,
      { ...action.payload, total: action.payload.price, quantity: 1 },
    ];
  }

  if (action.type === "REMOVE_ITEM") {
    if (action.payload.quantity === 0) {
      return state.filter((item) => {
        return item.quantity > 0;
      });
    }
    return state.map((item) => {
      return item.id === action.payload.id
        ? {
            ...item,
            total: item.total - action.payload.price,
            quantity: item.quantity - 1,
          }
        : item;
    });
  }
  return state;
};

const store = createStore(cartReducer);

export default store;
