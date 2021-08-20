import Card2 from '../Card2';
const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-40">
          Корзина
          <img className="removeBtn cu-p" src="img/btnRemove.svg" alt="Remove" />
        </h2>

        <div className="items">
          <Card2 />
          <Card2 />
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li className="d-flex align-end mb-20">
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className="d-flex align-end mb-20">
              <span>Налог 5%</span>
              <div></div>
              <b>1074руб</b>
            </li>
          </ul>
          <button className="greenBtn">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
