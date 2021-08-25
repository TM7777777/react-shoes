import React from 'react';
import Card from '../../Card';
import Info from '../../Info';
import { AppContext } from '../../../App';

const Favorites = ({ onAddFavorite, addToCart }) => {
  const { favItems } = React.useContext(AppContext);
  return (
    <div className="p-40 d-flex flex-column justify-between mb-40">
      {favItems.length > 0 ? (
        <>
          <h1>Мои закладки</h1>
          <div className="d-flex flex-wrap">
            {favItems.map((el) => (
              <Card
                {...el}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => addToCart(obj)}
                favorited={true}
              />
            ))}
          </div>
        </>
      ) : (
        <Info
          title="Закладок нет :("
          imgUrl="/img/sad.svg"
          description="Вы ничего не добавляли в закладки"
          wid="60px"
          hgt="60px"
        />
      )}
    </div>
  );
};

export default Favorites;
