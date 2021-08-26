import React from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../App';

const Card = ({
  path,
  title,
  price,
  onFavorite,
  onPlus,
  id,
  favorited = false,
  loading = false,
}) => {
  const { isFavAdd, isItemAdd } = React.useContext(AppContext);

  const obj = { title, price, path, id, parentId: id };

  const handleClickLike = () => {
    onFavorite(obj);
  };
  const handleClickPlus = () => {
    onPlus(obj);
  };
  return (
    <div className="goods">
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={250}
          viewBox="0 0 150 250"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="130" />
          <rect x="0" y="142" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="163" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="200" rx="3" ry="3" width="80" height="24" />
          <rect x="118" y="192" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className="unlikeDiv">
            {favorited ||
              (onFavorite && (
                <img
                  className="unliked"
                  onClick={handleClickLike}
                  src={isFavAdd(id) ? '/img/heartact.svg' : '/img/heart.png'}
                  alt=""
                />
              ))}
          </div>
          <img className="cardImg" width="100%" heigth={135} src={path} alt="" />
          <p>{title}</p>
          <div className="d-flex justify-between align-center pt-10">
            <div className="contbox d-flex flex-column">
              <span>Цена:</span>
              <strong>{price} руб.</strong>
            </div>
            {onPlus && (
              <img
                className="plusBtn"
                onClick={handleClickPlus}
                src={isItemAdd(id) ? '/img/plusact.svg' : '/img/plusBtn1.svg'}
                alt=""
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
