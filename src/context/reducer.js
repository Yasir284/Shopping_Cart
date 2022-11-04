import { ADD_ITEM, REMOVE_ITEM, BUY_ITEM } from "./action.type";

import { toast } from "react-toastify";

const ItemReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemRepeated = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemRepeated) {
        return toast("Item is already added", { type: "warning" });
      } else {
        return [...state, action.payload];
      }
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
