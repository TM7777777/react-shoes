const Header = (props) => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="headLefr d-flex align-center">
        <img width={40} heigth={40} src="/img/logo.png" alt="" className="mr-15" />
        <div className="">
          <h3 className="text-uppercase">Shoes Store</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex">
        <li className="val mr-20 cu-p" onClick={props.clickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="img" className="mr-15" />
          <span className="val">{`${props.sum} руб.`}</span>
        </li>
        <li>
          <img width={19} height={19} className="cu-p mr-10" src="/img/favorite.svg" alt="" />
        </li>
        <li>
          <img src="/img/acc.svg" alt="img" className="cu-p" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
