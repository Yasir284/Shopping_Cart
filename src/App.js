import React, { useReducer, useEffect, useState } from "react";

import ItemContext from "./context/ItemContext";
import ItemReducer from "./context/reducer";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Switch, Route, useLocation } from "react-router-dom";
import {
  randWord,
  randAmount,
  randUuid,
  randProductDescription,
  randColor,
} from "@ngneat/falso";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [cartItem, dispatch] = useReducer(ItemReducer, []);
  const localUrl = "http://myjson.dit.upm.es/api/bins/5ce6";
  const [products, setProduct] = useState([]);
  const [active, setActive] = useState(location.pathname);

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
        productDescription: randProductDescription(),
        productColor: randColor(),
      };
    });

    setProduct(allProducts);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <ItemContext.Provider
        value={{ cartItem, dispatch, products, active, setActive }}
      >
        <Navbar />
        <ToastContainer position="top-left" theme="dark" autoClose={2000} />
        <AnimatePresence mode="wait">
          <Switch location={location} key={location.key}>
            <Route exact path="/">
              <BuyPage />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </AnimatePresence>
      </ItemContext.Provider>
    </>
  );
}

export default App;
