import { Link } from 'react-router-dom';

const NoItems = ({ title, par, imgUrl, parcl }) => {
  return (
    <div className="cartTotalBlock2 d-flex flex-column align-center">
      <ul className="d-flex flex-column align-center">
        <li>
          <img width={60} heigth={60} src={imgUrl} alt="img" />
        </li>
        <li className="cartit">
          <h2>{title}</h2>
        </li>
        <li className="mb-40">
          <p className={parcl}>{par}</p>
        </li>
      </ul>
      <Link to="/">
        <button className={'greenBtn align-center pr-30'}>
          <img className="arrow3 mr-30 mt-0" src="/img/arrow2.svg" alt="Arrow" />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default NoItems;
