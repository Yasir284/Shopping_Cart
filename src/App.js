import React, { useReducer } from "react";

import ItemContext from "./context/ItemContext";
import ItemReducer from "./context/reducer";
import Card from "./components/Card";
import Cart from "./components/Cart";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItem, dispatch] = useReducer(ItemReducer, []);

  return (
    <>
      <ItemContext.Provider value={{ cartItem, dispatch }}>
        <div className="text-gray-600 body-font container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Card />
          </div>
        </div>
      </ItemContext.Provider>
    </>
  );
}

export default App;
