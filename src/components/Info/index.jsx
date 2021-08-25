import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

const Info = ({ imgUrl, title, description, wid, hgt }) => {
  const { setCartState } = React.useContext(AppContext);
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img width={wid} heigth={hgt} src={imgUrl} className="mb-20" alt="img" />
      <h2 className="mb-10">{title}</h2>
      <p className="opacity-6">{description}</p>
      <Link to="/">
        <button onClick={() => setCartState(false)} className="greenBtn mb-50">
          <img className="arrow" src="/img/arrow2.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default Info;
