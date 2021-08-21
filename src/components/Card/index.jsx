import { useState } from 'react';

const Card = ({ path, title, price, onFavorite, onPlus, id }) => {
  const [liked, setLiked] = useState(false);
  function handleClickLike() {
    setLiked((like) => !like);
  }
  const [plus, setPlus] = useState(false);

  function handleClickPlus() {
    if (!plus) {
      onPlus({ title, price, path, id });
      setPlus((plusState) => !plusState);
    } else {
      setPlus((plusState) => !plusState);
    }
  }
  return (
    <div className="goods mb-30 mr-30">
      <div className="unlikeDiv">
        <img
          className="unliked"
          onClick={handleClickLike}
          src={liked ? '/img/heartact.svg' : '/img/heart.png'}
          alt=""
        />
      </div>
      <img width={133} heigth={112} src={path} alt="" />
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
    </div>
  );
};

export default Card;
