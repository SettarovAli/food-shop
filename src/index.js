import ReactDOM from 'react-dom';

import App from './App';

import './index.css';
import { CartContextProvider } from './store/cart-context';

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById('root')
);
