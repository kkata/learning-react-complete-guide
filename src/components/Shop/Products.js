import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="1"
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
        <ProductItem id="2" title="Test2" price={10} description="22222" />
      </ul>
    </section>
  );
};

export default Products;
