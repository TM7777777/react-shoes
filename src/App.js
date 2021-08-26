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
      try {
        const [cartResponse, favResponse, itemsResopnse] = await Promise.all([
          axios.get(`https://611fac1b988f860017ac437f.mockapi.io/cart`),
          axios.get(`https://611fac1b988f860017ac437f.mockapi.io/favorites`),
          axios.get(`https://611fac1b988f860017ac437f.mockapi.io/items`),
        ]);

        setLoading(false);
        setCartItems(cartResponse.data);
        setFavItems(favResponse.data);
        setItems(itemsResopnse.data);
      } catch (error) {
        alert('Ошибка при запросе');
      }
    }

    fetchData();
  }, []);

  const addToCart = async (obj) => {
    try {
      const findItem = cartItems.find((cartobj) => Number(cartobj.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(`https://611fac1b988f860017ac437f.mockapi.io/cart`, obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить в корзину!');
      console.log(error);
    }
  };

  const removeItem = (id) => {
    try {
      axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Не удалось удалить елемент!');
      console.log(id);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchState(event.target.value);
  };

  const onAddFavorite = async (obj) => {
    try {
      const findItem = favItems.find((cartobj) => Number(cartobj.parentId) === Number(obj.id));
      if (findItem) {
        setFavItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/favorites/${findItem.id}`);
      } else {
        setFavItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          `https://611fac1b988f860017ac437f.mockapi.io/favorites`,
          obj,
        );
        setFavItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          }),
        );
      }
    } catch (error) {
      alert('Не удалось добавить в закладки!');
      console.log(error);
    }
  };

  const isItemAdd = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const isFavAdd = (id) => {
    return favItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favItems,
        isItemAdd,
        isFavAdd,
        setCartState,
        setCartItems,
      }}>
      <div className="wrapper clear">
        <Drawer
          items={cartItems}
          onRemove={removeItem}
          removeCart={() => setCartState(false)}
          sum={sum}
          fee={fee}
          opened={cartState}
        />
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
          <Favorites onAddFavorite={onAddFavorite} addToCart={addToCart} isLoading={isLoading} />
        </Route>
        <Route path="/orders">
          <Orders onAddFavorite={onAddFavorite} addToCart={addToCart} />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
