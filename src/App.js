import './index.css';
import Header from './components/Header';
import Card from './components/Card';
import Drawer from './components/Drawer';

function App() {
  const goods = [
    {
      title: 'Мужские Кроссовки Nike Blazer Mid Suede',
      price: '12 999',
      id: 1,
      path: '/img/1.png',
    },
    { title: 'Мужские Кроссовки Nike Air Max 270', price: '10 000', id: 2, path: '/img/2.png' },
    { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499', id: 3, path: '/img/3.png' },
    { title: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999', id: 4, path: '/img/4.png' },
  ];
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img
              width={14}
              heigth={14}
              className="mr-10 ml-10"
              src="/img/search.svg "
              alt="Search"
            />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {goods.map((el) => (
            <Card title={el.title} price={el.price} path={el.path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
