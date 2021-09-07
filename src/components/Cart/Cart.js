import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // console.log(cartItems);
  const itemsContent = (
    <ul>
      {cartItems.map((item) => {
        return (
          <CartItem
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.total,
              price: item.price,
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
      {cartItems.length ? itemsContent : <p>No Items</p>}
    </Card>
  );
};

export default Cart;
