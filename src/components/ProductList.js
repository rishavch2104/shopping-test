import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";
import { shoppingItems } from "./../shoppingItems";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const ProductList = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid style={{ marginTop: "10px" }} container spacing={3}>
        {shoppingItems.map(product => (
          <Grid item xs>
            <ProductCard data={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
