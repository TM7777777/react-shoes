import React from 'react';
import axios from 'axios';
import Card from '../../Card';
import Info from '../../Info';

const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://611fac1b988f860017ac437f.mockapi.io/orders`);
        setOrders(data.map((el) => el.items).flat());
        setLoading(false);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className="p-40 d-flex flex-column justify-between mb-40">
      {isLoading ? (
        <>
          <h1>Мои заказы</h1>
          <div className="d-flex flex-wrap">
            {[...Array(12)].map((el, index) => (
              <Card {...el} key={index} loading={isLoading} favorited={false} />
            ))}
          </div>
        </>
      ) : orders.length > 0 ? (
        <>
          <h1>Мои заказы</h1>
          <div className="d-flex flex-wrap">
            {orders.map((el, index) => (
              <Card {...el} key={index} loading={isLoading} favorited={false} />
            ))}
          </div>
        </>
      ) : (
        <Info
          title="У вас нет заказов"
          description="Вы нищеброд? Оформите хотя бы один заказ."
          imgUrl="/img/sad2.svg"
          wid="60px"
          hgt="60px"
        />
      )}
    </div>
  );
};

export default Orders;
