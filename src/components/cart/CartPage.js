import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import Container from "@material-ui/core/Container";
import CartItem from "./CartItem";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import {
  CardActionArea,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";
const initialCart = [
  { id: 1, quantity: 2 },
  { id: 0, quantity: 3 }
];
const Cart = props => {
  const { history, items } = props;
  const handleOrderClicked = () => {
    history.push("/completed");
  };

  return (
    <Container>
      <Grid container spacing={4} style={{ marginTop: "10px" }}>
        <Grid item xs md lg>
          <Box display="flex" justifyContent="space-between">
            <Typography display="inline" variant="h4">
              Shopping Cart
            </Typography>
            <Typography
              style={{ marginTop: "10px" }}
              variant="h6"
              display="inline"
            >
              Amount
            </Typography>
          </Box>

          <hr />

          {items.map(item => (
            <>
              <CartItem {...item} />
            </>
          ))}
        </Grid>
        <Grid item xs={3} md={3} lg={3}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Total Amount
                </Typography>
                <Typography variant="subtitle1">2000</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={handleOrderClicked} variant="outlined">
                Place Order
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapStatetoProps = state => ({
  items: state.cart.cartItems
});
export default connect(mapStatetoProps, null)(withRouter(Cart));
