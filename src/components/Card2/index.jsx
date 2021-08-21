const Card2 = ({ path, click, title, price, id }) => {
  const handleClick = () => {
    click({ title, price, path, id });
  };
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div className="cartImage" style={{ backgroundImage: `url(${path})` }}></div>
      <div className="mr-20 flex">
        <p className="mb-5">{title}</p>
        <strong>{price}</strong>
      </div>
      <img className="removeBtn" onClick={handleClick} src="img/btnRemove.svg" alt="Remove" />
    </div>
  );
};

export default Card2;
