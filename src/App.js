import React, { useReducer, useEffect, useState } from "react";

import ItemContext from "./context/ItemContext";
import ItemReducer from "./context/reducer";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { randWord, randAmount, randUuid } from "@ngneat/falso";

function App() {
  const [cartItem, dispatch] = useReducer(ItemReducer, []);
  const localUrl = "http://myjson.dit.upm.es/api/bins/5ce6";
  const [products, setProduct] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(localUrl);
    const { photos } = data;

    const allProducts = photos.map((photo) => {
      return {
        smallImage: photo?.src?.medium,
        tinyImage: photo?.src?.small,
        productName: randWord().toUpperCase(),
        productPrice: randAmount(),
        id: randUuid(),
      };
    });

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <ItemContext.Provider value={{ cartItem, dispatch, products }}>
        <BuyPage />
        <Cart />
      </ItemContext.Provider>
    </>
  );
}

export default App;
