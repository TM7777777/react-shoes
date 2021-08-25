import './index.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Favorites from './components/pages/Favorites';
import Home from './components/pages/Home';
import Orders from './components/pages/Orders';

export const AppContext = React.createContext({});
function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [searchState, setSearchState] = useState('');
  const [isLoading, setLoading] = useState(true);

  const sum = cartItems.reduce((acc, el) => (acc += +el.price), 0);
  const fee = Math.round(sum * 0.05);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(`https://611fac1b988f860017ac437f.mockapi.io/cart`);
      const favResponse = await axios.get(`https://611fac1b988f860017ac437f.mockapi.io/favorites`);
      const itemsResopnse = await axios.get(`https://611fac1b988f860017ac437f.mockapi.io/items`);
      setLoading(false);

      setCartItems(cartResponse.data);
      setFavItems(favResponse.data);
      setItems(itemsResopnse.data);
    }

    fetchData();
  }, []);

  const addToCart = async (obj) => {
    try {
      if (cartItems.find((cartobj) => +cartobj.id === +obj.id)) {
        axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => +item.id !== +obj.id));
      } else {
        const { data } = await axios.post(`https://611fac1b988f860017ac437f.mockapi.io/cart`, obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину!');
    }
  };

  const removeItem = (id) => {
    axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => +item.id !== +id));
  };

  const onChangeSearchInput = (event) => {
    setSearchState(event.target.value);
  };

  const onAddFavorite = async (obj) => {
    try {
      if (favItems.find((favobj) => Number(favobj.id) === Number(obj.id))) {
        axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/favorites/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          `https://611fac1b988f860017ac437f.mockapi.io/favorites`,
          obj,
        );
        setFavItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в закладки!');
    }
  };

  const isItemAdd = (title) => {
    return cartItems.some((obj) => obj.title === title);
  };
  return (
    <AppContext.Provider
      value={{ items, cartItems, favItems, isItemAdd, setCartState, setCartItems }}>
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
        <Route path="/" exact>
          <Home
            items={items}
            searchState={searchState}
            isLoading={isLoading}
            onChangeSearchInput={onChangeSearchInput}
            setSearchState={setSearchState}
            addToCart={addToCart}
            onAddFavorite={onAddFavorite}
          />
        </Route>
        <Route path="/favorites">
          <Favorites onAddFavorite={onAddFavorite} addToCart={addToCart} />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
