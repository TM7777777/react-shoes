const Header = () => {
  return (
    <header className="header d-flex justify-between align-center p-40">
      <div className="headLefr d-flex align-center">
        <img width={40} heigth={40} src="/img/logo.png" alt="" className="mr-15" />
        <div className="">
          <h3 className="text-uppercase">Shoes Store</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="headerRight d-flex ">
        <li className="mr-30">
          <img width={18} height={18} src="/img/Group.svg" alt="" className="mr-15" />
          <span className="val">1205 руб.</span>
        </li>
        <li>
          <img src="/img/Union.svg" alt="" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
