import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state);
  console.log(items);
  const itemsContent = (
    <ul>
      {items.map((item) => {
        return (
          <CartItem
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: Number(item.total),
              price: Number(item.price),
            }}
            key={item.id}
          />
        );
      })}
    </ul>
  );
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {items.length ? itemsContent : <p>No Items</p>}
    </Card>
  );
};

export default Cart;
