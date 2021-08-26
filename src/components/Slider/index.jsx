import React from 'react';
import { AppContext } from '../../App';

const Slider = () => {
  const { setCartState } = React.useContext(AppContext);
  return (
    <div>
      <img className="slider" src="/img/slider.png" alt="slider" />
      <button onClick={() => setCartState(true)} className="buy_btn">
        Купить
      </button>
    </div>
  );
};

export default Slider;
