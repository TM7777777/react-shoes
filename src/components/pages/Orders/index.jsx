import Card from '../../Card';
import Info from '../../Info';

const Orders = ({ items = [], onAddFavorite, addToCart }) => {
  return (
    <div className="p-40 d-flex flex-column justify-between mb-40">
      {items.length > 0 ? (
        <>
          <h1>Мои закладки</h1>
          <div className="d-flex flex-wrap">
            {items.map((el) => (
              <Card
                {...el}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => addToCart(obj)}
                favorited={true}
              />
            ))}
          </div>{' '}
        </>
      ) : (
        <Info
          title="У вас нет заказов"
          description="Вы нищеброд? Оформите хотя бы один заказ."
          imgUrl="/img/sad2.svg"
          wid="60px"
          hgt="60px"
        />
      )}
    </div>
  );
};

export default Orders;
