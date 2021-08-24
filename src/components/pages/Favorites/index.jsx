import Card from '../../Card';
import NoItems from '../../NoItems';

const Favorites = ({ items = [], onAddFavorite, addToCart }) => {
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
          title={'Закладок нет :('}
          imgUrl={'/img/sad.png'}
          parcl={'par2'}
          par={'Вы ничего не добавляли в закладки'}
        />
      )}
    </div>
  );
};

export default Favorites;
