import React from 'react';
import Card from '../../Card';
import Info from '../../Info';
import { AppContext } from '../../../App';

const Favorites = ({ onAddFavorite, addToCart, isLoading }) => {
  const { favItems } = React.useContext(AppContext);
  return (
    <div className="p-40 d-flex flex-column justify-between mb-40">
      {isLoading ? (
        <>
          <h1>Мои закладки</h1>
          <div className="d-flex flex-wrap">
            {[...Array(12)].map((el, index) => (
              <Card {...el} key={index} loading={isLoading} favorited={false} />
            ))}
          </div>
        </>
      ) : favItems.length > 0 ? (
        <>
          <h1>Мои закладки</h1>
          <div className="d-flex flex-wrap">
            {favItems.map((el, id) => (
              <Card
                {...el}
                key={id}
                onFavorite={(obj) => onAddFavorite(obj)}
                onPlus={(obj) => addToCart(obj)}
                loading={isLoading}
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
