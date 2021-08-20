import { useState } from 'react';

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  function handleClickLike() {
    setLiked((like) => !like);
  }
  const [plus, setPlus] = useState(false);
  function handleClickPlus() {
    setPlus(!plus);
  }
  return (
    <div className="goods ml-20 mr-20">
      <div className="unlikeDiv">
        <img
          className="unliked"
          onClick={handleClickLike}
          src={liked ? '/img/heartact.svg' : '/img/heart.svg'}
          alt=""
        />
      </div>
      <img width={133} heigth={112} src={props.path} alt="" />
      <p>{props.title}</p>
      <div className="d-flex justify-between align-center pt-10">
        <div className="contbox d-flex flex-column">
          <span>Цена:</span>
          <strong>{props.price} руб.</strong>
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
