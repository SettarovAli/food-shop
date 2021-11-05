import { useState, createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  cartIsShown: false,
  onShowCart: () => {},
  onHideCart: () => {},
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {};

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    cartIsShown,
    onShowCart: showCartHandler,
    onHideCart: hideCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
