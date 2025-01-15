import { useState } from "react";
import { pizzas as initialCart } from "../data/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const removePizza = (id) => {
      setCart(cart.filter(item => item.id !== id));
  };

  const addPizza = (id) => {
      setCart(cart.map(item =>
          item.id === id ? { ...item, count: item.count + 1 } : item
      ));
  };

  const reducePizza = (id) => {
      setCart(prevCart => {
          const updatedCart = prevCart.map(item =>
              item.id === id
                  ? { ...item, count: Math.max(item.count - 1, 0) }
                  : item
          );
          return updatedCart.filter(item => item.count > 0);
      });
  };

  const totalQuantity = () => {
      return cart.reduce((total, item) => total + item.count, 0);
  };

  const totalPrice = () => {
      return cart.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
      <div>
          <h2>Carrito de Compras</h2>
          {cart.length === 0 ? (
              <p>El carrito está vacío</p>
          ) : (
              <div>
                  <ul>
                      {cart.map(item => (
                          <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                              <img src={item.img} alt={item.name} style={{ width: '100px', marginRight: '15px' }} />
                              <div>
                                  <div>
                                  <p>Pizza {item.name}</p>
                                  <p>Precio: ${item.price}</p>
                                  <p>Cantidad: {item.count}</p>
                                  </div>
                                  <button onClick={() => addPizza(item.id)}>+</button>
                                  <button className='m-1' onClick={() => reducePizza(item.id)}>-</button>
                                  <button onClick={() => removePizza(item.id)}>Eliminar</button>
                                  <hr />
                              </div>
                          </li>
                      ))}
                  </ul>
                  <div className='m-1'>
                      <h3 >Total Productos: {totalQuantity()}</h3>
                      <h3 >Total Precio: ${totalPrice()}</h3>
                      <button className='m-1'>Pagar</button>
                  </div>
              </div>
          )}
      </div>
  );
};

export default Cart;