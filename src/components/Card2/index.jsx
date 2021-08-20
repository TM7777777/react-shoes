const Card2 = () => {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div className="cartImage" style={{ backgroundImage: 'url(img/1.png' }}></div>
      <div className="mr-20 flex">
        <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <strong>12 999 руб.</strong>
      </div>
      <img className="removeBtn" src="img/btnRemove.svg" alt="Remove" />
    </div>
  );
};

export default Card2;
