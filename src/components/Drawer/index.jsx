import React from 'react';
import { AppContext } from '../../App';
import axios from 'axios';
import CartItem from '../CartItem';
import Info from '../Info';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ onRemove, removeCart, items = [], sum, fee }) => {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [isCompOrder, setCompOrder] = React.useState(false);
  const [countId, setCountId] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  const clickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`https://611fac1b988f860017ac437f.mockapi.io/orders`, {
        items: cartItems,
      });
      setCountId(data.id);
      setCompOrder(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(`https://611fac1b988f860017ac437f.mockapi.io/cart` + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Не удалось создать заказ :(');
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img
            onClick={removeCart}
            width={35}
            height={35}
            className="removeButton cu-p"
            src="img/searchDel.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <>
            <div className="items">
              {items.map((el) => (
                <CartItem
                  key={el.id}
                  title={el.title}
                  path={el.path}
                  price={el.price}
                  id={el.id}
                  click={(id) => onRemove(id, false)}
                />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li className="d-flex align-end mb-20">
                  <span>Итого:</span>
                  <div></div>
                  <b>{`${sum} руб.`}</b>
                </li>
                <li className="d-flex align-end mb-20">
                  <span>Налог 5%</span>
                  <div></div>
                  <b>{`${fee} руб.`}</b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={clickOrder} className="greenBtn">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <Info
            title={isCompOrder ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isCompOrder
                ? `Ваш заказ #${countId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            imgUrl={isCompOrder ? '/img/order.svg' : '/img/cartimg.svg'}
            wid="120px"
            hgh="120px"
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
