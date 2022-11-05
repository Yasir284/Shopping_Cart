import { ADD_ITEM, REMOVE_ITEM, BUY_ITEM } from "./action.type";

import { toast } from "react-toastify";

const ItemReducer = (state, action) => {
  debugger;
  switch (action.type) {
    case ADD_ITEM: {
      let itemRepeated = state.filter((item) => {
        return item.id === action.payload.id;
      });
      console.log(state);
      console.log(itemRepeated.length);
      if (itemRepeated.length > 0) {
        return toast("Item is already added", { type: "warning" });
      } else return [...state, action.payload];
    }

    case REMOVE_ITEM: {
      return state.filter((item) => item.id !== action.payload);
    }

    case BUY_ITEM: {
      state = [];
      return toast("Payment sucessfull", { type: "success" });
    }

    default:
      return state;
  }
};

export default ItemReducer;
