import { useSelector } from "react-redux";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const cartAmount = useSelector((state) => {
    let totalQuantity = 0;
    for (let index = 0; index < state.length; index++) {
      // console.log(state[index].quantity);
      totalQuantity += state[index].quantity;
    }
    console.log(totalQuantity);
    return totalQuantity;
  });
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
