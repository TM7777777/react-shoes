const CartItem = ({ path, title, price, id, click }) => {
  const handleClick = () => {
    click(id, false);
  };
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div className="cartImage" style={{ backgroundImage: `url(${path})` }}></div>
      <div className="mr-20 flex">
        <p className="mb-5">{title}</p>
        <strong>{price}</strong>
      </div>
      <img
        onClick={() => handleClick(id)}
        className="removeBtn"
        src="img/btnRemove.svg"
        alt="Remove"
      />
    </div>
  );
};

export default CartItem;
