import './index.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartState, setCartState] = useState(false);

  React.useEffect(() => {
    fetch('https://611fac1b988f860017ac437f.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);
  React.useEffect(() => {
    cartState ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
  }, [cartState]);
  const addToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };
  const removeFrom = (obj) => {
    setCartItems(cartItems.filter((el, id) => id !== obj.id));
  };
  return (
    <div className="wrapper clear">
      {cartState ? (
        <Drawer
          items={cartItems}
          funcRem={(obj) => removeFrom(obj)}
          removeCart={() => setCartState(false)}
        />
      ) : null}
      <Header clickCart={() => setCartState(true)} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img
              width={14}
              heigth={14}
              className="mr-10 ml-10"
              src="/img/search.svg "
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((el) => (
            <Card
              title={el.title}
              price={el.price}
              path={el.path}
              id={el.id}
              onFavorite={() => console.log('saas')}
              onPlus={(obj) => addToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
