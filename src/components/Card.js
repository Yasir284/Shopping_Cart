import { motion } from "framer-motion";

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

function Card({ img, name, price, addItem, description }) {
  return (
    <div className="dark:bg-slate-900 rounded-md shadow-xl shadow-[#111111] hover:scale-110 hover:shadow-gray-600 transition-all ease-in-out duration-300 lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={img}
        />
      </div>
      <div className="text-gray-300 flex flex-row justify-between items-center my-6">
        <h3 className="text-sm tracking-widest title-font">{name}</h3>
        <p>₹ {Math.round(price)}</p>
      </div>
      <p className="text-gray-400 text-sm text-left h-20 mb-4">{description}</p>
      <motion.button
        className="px-8 py-3 rounded-3xl text-slate-900 font-bold border-solid border-2 border-transparent transition-all ease-in-out duration-200 bg-white hover:bg-slate-900 hover:text-white hover:border-white active:scale-50"
        onClick={addItem}
        variants={btnVarient}
        initial="initial"
        whileHover="whileHover"
      >
        Buy now
      </motion.button>
    </div>
  );
}

export default Card;
