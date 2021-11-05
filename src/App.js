import { Fragment, useContext } from 'react';

import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

import CartContext from './store/cart-context';

function App() {
  const cartContext = useContext(CartContext);

  return (
    <Fragment>
      {cartContext.cartIsShown && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
