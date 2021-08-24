import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headLefr d-flex align-center">
          <img width={40} heigth={40} src="/img/logo.png" alt="" className="mr-15" />
          <div className="">
            <h3 className="text-uppercase">Shoes Store</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="headerRight d-flex">
        <li className="val mr-20 cu-p" onClick={props.clickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="img" className="mr-15" />
          <span className="val">{`${props.sum} руб.`}</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={19} height={19} className="cu-p mr-15" src="/img/favorite.svg" alt="" />
          </Link>
        </li>
        <Link to="/orders">
          <li>
            <img src="/img/acc.svg" alt="img" className="cu-p" />
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
