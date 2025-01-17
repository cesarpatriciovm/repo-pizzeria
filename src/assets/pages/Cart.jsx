import { useState } from "react";
import { pizzaCart as initialCart } from "../data/pizzas";

function Cart() {
  const [cart, setCart] = useState(initialCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((pizza) =>
        pizza.id === id && pizza.count > 0 ? { ...pizza, count: pizza.count - 1 } : pizza
      )
    );
  };

  const getPizzaById = (id) => cart.find((pizza) => pizza.id === id);

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0);
  };

  return (
    <div className="container mt-14 mb-5 text-center p-5 ">
      <h1 className="text-2xl font-semibold text-center mb-8">Carrito de Compras</h1>
      <div className="flex flex-col space-y-4">
        {initialCart.map((pizza) => (
          <div key={pizza.id} className="flex flex-row justify-evenly items-center border-b-2 border-gray-200 p-4">
            <div className="flex flex-row items-center space-x-4">
              <img src={pizza.img} alt={pizza.name} className="w-20 h-20 object-cover rounded-lg" />
              <div>
                <h2 className="text-lg font-semibold">{pizza.name}</h2>
                <p className="text-sm text-gray-500">Precio: ${pizza.price}</p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <button className="bg-blue-700 text-white px-2 py-2 w-10 rounded-lg" onClick={() => decreaseQuantity(pizza.id)}>
                -
              </button>
              <p className="text-sm text-gray-500">{getPizzaById(pizza.id)?.count || 0}</p>
              <button className="bg-red-700 text-white px-2 py-2 w-10 rounded-lg" onClick={() => increaseQuantity(pizza.id)}>
                +
              </button>
            </div>
          </div>
        ))}
        <div>
          <h2 className="text-lg font-semibold">Total: ${calculateTotal()}</h2>
          <button className="bg-orange-700 text-white font-semibold px-2 py-2 rounded-lg">Pagar</button>
				</div>
		</div>
	</div>
	);
}

export default Cart;