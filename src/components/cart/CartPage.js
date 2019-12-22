import React from "react";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
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
  const { history } = props;
  const handleOrderClicked = () => {
    history.push("/completed");
  };
  return (
    <Grid
      container
      spacing={4}
      style={{ marginTop: "10px", marginLeft: "10px" }}
    >
      <Grid item xs={8}>
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
        <List>
          {initialCart.map(item => (
            <>
              <CartItem {...item} />
              <Divider />
            </>
          ))}
        </List>
      </Grid>
      <Grid item xs={3}>
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
  );
};

export default withRouter(Cart);
