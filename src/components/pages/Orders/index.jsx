import Card from '../../Card';
import NoItems from '../../NoItems';

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
        <NoItems
          title={'У вас нет заказов'}
          imgUrl={'/img/sad2.png'}
          parcl={'par3'}
          par={'Вы нищеброд? Оформите хотя бы один заказ.'}
        />
      )}
    </div>
  );
};

export default Orders;
