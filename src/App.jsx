// import './App.css';

function App() {
  const products = [
    {
      id: 1,
      title: 'MacBook Pro',
      category: 'Laptops',
      price: 100000.0,
      quantity: 2,
      description: 'A high-performance laptop.',
      manufactureDate: '2023-05-15T08:30:00',
      isAvailable: true,
    },
    {
      id: 2,
      title: 'Nike',
      category: 'Running Shoes',
      price: 5000,
      quantity: 3,
      description: 'Running shoes designed for speed and comfort.',
      manufactureDate: '2023-02-20T14:45:00',
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Python',
      category: 'Books',
      price: 500,
      quantity: 1,
      description: 'A language for AI',
      manufactureDate: '1925-04-10T10:10:00',
      isAvailable: false,
    },
    {
      id: 4,
      title: 'Javascript',
      category: 'Books',
      price: 700,
      quantity: 5,
      description: 'A language for Browser',
      manufactureDate: '1995-12-04T12:00:00',
      isAvailable: false,
    },
    {
      id: 5,
      title: 'Dell XPS',
      category: 'Laptops',
      price: 120000.0,
      quantity: 2,
      description: 'An ultra-slim laptop with powerful performance.',
      manufactureDate: '2023-04-25T09:15:00',
      isAvailable: true,
    },
  ];

  // const totalPrice = products.reduce((pre, curr) => {
  //   console.log(curr.price);
  //   return pre + curr.price;
  // }, 0);

  // const uniqueItems = new Set(products.map((item) => item.category));

  // const availableProducts = products
  //   .filter((item) => item.isAvailable === true)
  //   .map((item, i) => {
  //     return item;
  //   });

  const productDesc = products.map((item, i) => {
    return `${item.title} was manufactured on ${new Date(item.manufactureDate)
      .toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })
      .replace(',', '')
      .replaceAll('/', '-')}`;
  });
  console.log(productDesc);
  return (
    <div>
      <h1>The product in our shop: </h1>
      {/* {products
        .map((item, i) => (
          <div key={i}>
            {item.title} costs NRS.{item.price} and its category is{' '}
            {item.category}
          </div>
        ))
        .filter((item) => item.props.children[2] > 2000)} */}
      {products
        // .filter((item) => item.price > 2000)
        .filter((item) => item.category.toLowerCase() === 'books')
        .map((item, i) => {
          return (
            <div>
              {item.title} costs NRS.{item.price} and its category is{' '}
              {item.category}
            </div>
          );
        })}
      <div>
        The total price of all products is{' '}
        {products
          // .reduce((pre, curr) => pre + curr.price, 0)
          .reduce((pre, cur) => {
            return pre + cur.price;
          }, 0)}
      </div>
      <div>
        The total price of all products whose category are books is{' '}
        {products
          .filter((item) => item.category === 'Books')
          .reduce((pre, cur) => {
            return pre + cur.price;
          }, 0)}
      </div>
      <div>
        Unique Category:
        {
          new Set(
            products.map((item, i) => {
              return item.category;
            })
          )
        }
      </div>
      <div>
        Products with description:
        {products.map((item, i) => {
          return (
            <div>
              {item.title} is manufactured at{' '}
              {new Date(item.manufactureDate)
                .toLocaleString()
                .replaceAll('/', '-')}
            </div>
          );
        })}
      </div>

      <div>
        Products available:
        {products
          .filter((item) => item.isAvailable === true)
          .map((item, i) => {
            return (
              <div>
                {item.title} - Price: {item.price}
              </div>
            );
          })}
        Total Price of available products: NRS.
        {products
          .filter((item) => item.isAvailable === true)
          .reduce((pre, cur) => {
            return pre + cur.price;
          }, 0)}
      </div>
    </div>
  );
}

export default App;
