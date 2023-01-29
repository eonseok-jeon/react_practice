import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.item);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((elem) => (
          <CartItem
            id={elem.id}
            item={{
              id: elem.id,
              title: elem.title,
              quantity: elem.amount,
              total: elem.totalPrice,
              price: elem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
