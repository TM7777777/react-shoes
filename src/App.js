import './index.css';
import axios from 'axios';
import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [searchState, setSearchState] = useState('');

  const sum = cartItems.reduce((acc, el) => (acc += +el.price), 0);
  const fee = Math.round(sum * 0.05);

  // const link = `https://611fac1b988f860017ac437f.mockapi.io`;

  React.useEffect(() => {
    axios.get(`https://611fac1b988f860017ac437f.mockapi.io/items`).then((res) => {
      setItems(res.data);
    });
    axios.get(`https://611fac1b988f860017ac437f.mockapi.io/cart`).then((res) => {
      setCartItems(res.data);
    });
    axios.get(`https://611fac1b988f860017ac437f.mockapi.io/favorites`).then((res) => {
      setFavItems(res.data);
    });
  }, []);

  const addToCart = (obj) => {
    axios.post(`https://611fac1b988f860017ac437f.mockapi.io/cart`, obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const removeItem = (id) => {
    axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchState(event.target.value);
  };

  const onAddFavorite = (obj) => {
    axios.post(`https://611fac1b988f860017ac437f.mockapi.io/favorites`, obj);
    setFavItems((prev) => [...prev, obj]);
    console.log(favItems);
  };

  return (
    <div className="wrapper clear">
      {cartState ? (
        <Drawer
          items={cartItems}
          onRemove={removeItem}
          removeCart={() => setCartState(false)}
          sum={sum}
          fee={fee}
        />
      ) : null}
      <Header clickCart={() => setCartState(true)} sum={sum} />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="genTitle">
            {searchState ? `Поиск по запросу: "${searchState}"` : 'Все кроссовки'}
          </h1>
          <div className="search-block d-flex">
            <img
              width={14}
              heigth={14}
              className="mr-10 ml-10"
              src="/img/search.svg "
              alt="Search"
            />
            <input
              onChange={onChangeSearchInput}
              value={searchState}
              maxLength={30}
              placeholder="Поиск..."
            />
            {searchState && (
              <img
                onClick={() => setSearchState('')}
                className="cu-p mr-10"
                width={30}
                heigth={30}
                src="/img/searchdel.svg"
                alt="remove"
              />
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchState.toLowerCase()))
            .map((el) => (
              <Card
                key={el.title}
                title={el.title}
                price={el.price}
                path={el.path}
                id={el.id}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => addToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
