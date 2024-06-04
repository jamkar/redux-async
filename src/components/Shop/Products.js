import ProductItem from './ProductItem';
import classes from './Products.module.css';

const MOCK_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'First book',
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    price: 5,
    title: 'Second book',
    description: 'This is a second product - amazing!',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {MOCK_PRODUCTS.map((product) => (
          <ProductItem key={product.id} id={product.id} title={product.title} price={product.price} description={product.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
