import { useContext } from "react";
import ItemContext from "../context/ItemContext";
import { ADD_ITEM } from "../context/action.type";

import Card from "./Card";

function BuyPage() {
  const { dispatch, products } = useContext(ItemContext);

  return (
    <div className="text-gray-600 body-font container px-5 py-24 mx-auto">
      <div className="flex flex-row flex-wrap justify-center items-center gap-8 -m-4 text-center">
        {products.map((product) => (
          <Card
            key={product.id}
            img={product.smallImage}
            name={product.productName}
            price={product.productPrice}
            addItem={() => {
              debugger;
              console.log(product);
              return dispatch({
                type: ADD_ITEM,
                payload: product,
              });
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default BuyPage;
