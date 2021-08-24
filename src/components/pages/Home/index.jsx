import Card from '../../Card';

const Home = ({
  items,
  searchState,
  onChangeSearchInput,
  setSearchState,
  onAddFavorite,
  addToCart,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchState.toLowerCase()),
    );
    return (isLoading ? [...Array(12)] : filtredItems).map((el, index) => (
      <Card
        key={index}
        // title={el.title}
        // price={el.price}
        // path={el.path}
        // id={el.id}
        {...el}
        loading={isLoading}
        onFavorite={(obj) => onAddFavorite(obj)}
        onPlus={(obj) => addToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(el.id))}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex justify-between align-center mb-40">
        <h1 className="genTitle">
          {searchState ? `Поиск по запросу: "${searchState}"` : 'Все кроссовки'}
        </h1>
        <div className="search-block d-flex">
          <img width={14} heigth={14} className="mr-10 ml-10" src="/img/search.svg " alt="Search" />
          <input
            onChange={onChangeSearchInput}
            value={searchState}
            maxLength={30}
            placeholder="Поиск..."
          />
          {searchState && (
            <img
              onClick={() => setSearchState('')}
              className="cu-p mr-10"
              width={30}
              heigth={30}
              src="/img/searchdel.svg"
              alt="remove"
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
