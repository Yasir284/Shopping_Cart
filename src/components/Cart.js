import React, { useContext } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BUY_ITEM, REMOVE_ITEM } from "../context/action.type";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ItemContext from "../context/ItemContext";

const itemVarient = {
  initial: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVarient = {
  hide: {
    x: "100vw",
  },
  show: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      mass: 0.6,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      ease: "easeOut",
    },
  },
};

const btnVarient = {
  initial: {
    scale: 1,
  },
  whileHover: {
    scale: [0.7, 1.5],
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
};

function Cart() {
  const { cartItem, dispatch } = useContext(ItemContext);

  const totalPrice = () => {
    return Math.round(
      cartItem
        .map((item) => item.productPrice)
        .reduce((prev, next) => prev + next, 0)
    );
  };

  return (
    <motion.div
      variants={containerVarient}
      initial="hide"
      animate="show"
      exit="exit"
      className="mx-auto my-12 rounded-md max-w-3xl p-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100 shadow-lg
       shadow-[#111111]"
    >
      <h2 className="text-xl font-semibold">Your cart</h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cartItem.length > 0 ? (
          cartItem.map((item) => {
            return (
              <AnimatePresence>
                <motion.li
                  variants={itemVarient}
                  exit="exit"
                  initial="initial"
                  key={item.id}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    <img
                      className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                      src={item.tinyImage}
                      alt="img"
                    />
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            {item.productName}
                          </h3>
                          <p className="text-sm dark:text-gray-400">
                            {item.productColor}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            ₹ {Math.round(item.productPrice)}
                          </p>
                          <p className="text-sm line-through dark:text-gray-600">
                            ₹{" "}
                            {Math.round(
                              item.productPrice + (item.productPrice * 25) / 100
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-sm divide-x">
                        <button
                          type="button"
                          className="text-red-500 flex items-center px-2 py-1 pl-0 space-x-1"
                          onClick={() => {
                            dispatch({
                              type: REMOVE_ITEM,
                              payload: item.id,
                            });
                          }}
                        >
                          <RiDeleteBin6Line />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              </AnimatePresence>
            );
          })
        ) : (
          <p className="my-20 text-base text-center dark:text-gray-400">
            No item in the cart
          </p>
        )}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount : <span className="font-semibold">₹ {totalPrice()}</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link to="/">
          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:border-violet-400 hover:text-slate-900 hover:bg-violet-400 transition-all ease-in-out duration-300 active:scale-50"
          >
            Back
            <span className="sr-only sm:not-sr-only">to shop</span>
          </button>
        </Link>
        <motion.button
          variants={btnVarient}
          initial="initial"
          whileHover="whileHover"
          type="button"
          className="px-6 py-2 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400 hover:text-white hover:bg-transparent transition-all ease-in-out duration-300 active:scale-50"
          onClick={() => {
            dispatch({
              type: BUY_ITEM,
            });
          }}
        >
          <span className="sr-only sm:not-sr-only">Buy Products</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Cart;
