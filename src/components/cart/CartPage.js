import React from "react";
import List from "@material-ui/core/List";
import CartItem from "./CartItem";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
const initialCart = [
  { id: 1, quantity: 2 },
  { id: 0, quantity: 3 }
];
const Cart = () => {
  return (
    <Container>
      <Typography variant="h4">Shopping Cart</Typography>
      <List>
        {initialCart.map(item => (
          <>
            <CartItem {...item} />
            <Divider />
          </>
        ))}
      </List>
    </Container>
  );
};

export default Cart;
