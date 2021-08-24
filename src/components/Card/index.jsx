import ContentLoader from 'react-content-loader';
import { useState } from 'react';

const Card = ({
  path,
  title,
  price,
  onFavorite,
  onPlus,
  id,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const [liked, setLiked] = useState(favorited);
  const [plus, setPlus] = useState(added);

  function handleClickLike() {
    // if (!liked) {
    //   onFavorite({ title, price, path, id });
    //   setLiked((like) => !like);
    // } else {
    //   setLiked((like) => !like);
    // }
    onFavorite({ title, price, path, id });
    setLiked((like) => !like);
  }

  function handleClickPlus() {
    // if (!plus) {
    //   onPlus({ title, price, path, id });
    //   setPlus((plusState) => !plusState);
    // } else {
    //   setPlus((plusState) => !plusState);
    // }
    onPlus({ title, price, path, id });
    setPlus((plusState) => !plusState);
  }
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
            <img
              className="unliked"
              onClick={handleClickLike}
              src={liked ? '/img/heartact.svg' : '/img/heart.png'}
              alt=""
            />
          </div>
          <img className="cardImg" width="100%" heigth={135} src={path} alt="" />
          <p>{title}</p>
          <div className="d-flex justify-between align-center pt-10">
            <div className="contbox d-flex flex-column">
              <span>Цена:</span>
              <strong>{price} руб.</strong>
            </div>
            <img
              className="plusBtn"
              onClick={handleClickPlus}
              src={plus ? '/img/plusact.svg' : '/img/plusBtn1.svg'}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
