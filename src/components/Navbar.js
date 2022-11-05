import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState(1);

  const listItems = [
    {
      id: 1,
      name: "HOME",
      handleClick: (id) => {
        setActive(id);
      },
    },
    {
      id: 2,
      name: "CART",
      handleClick: (id) => {
        setActive(id);
      },
    },
  ];

  return (
    <nav className="py-6 px-20 flex flex-row justify-between items-center text-white dark:bg-slate-900">
      <h1 className="font-extrabold text-2xl">Shopping App</h1>

      <ul className="font-bold hover: flex flex-row justify-center items-center gap-6">
        {listItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => item.handleClick(item.id)}
              className={`py-2 border-solid border-b-2 transition-all ease-in-out duration-300 cursor-pointer
              ${
                active === item.id
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent"
              }`}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
