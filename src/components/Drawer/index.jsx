import CardItem from '../CartItem';

const Drawer = ({ onRemove, removeCart, items = [], sum, fee }) => {
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
                <CardItem
                  key={el.title}
                  title={el.title}
                  path={el.path}
                  price={el.price}
                  click={() => onRemove(el.id)}
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
              <button className="greenBtn">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </>
        ) : (
          <div className="cartTotalBlock2 d-flex flex-column align-center m-40">
            <ul className="d-flex flex-column align-center m-30">
              <li>
                <img width={120} heigth={120} src="/img/cartimg.png" alt="img" />
              </li>
              <li className="cartit">
                <h2>Корзина пустая</h2>
              </li>
              <li>
                <p className="par">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
              </li>
            </ul>
            <button onClick={removeCart} className="greenBtn align-center">
              <img className="arrow2" src="/img/arrow2.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
