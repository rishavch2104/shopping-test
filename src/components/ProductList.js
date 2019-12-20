import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";

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

  const initialProducts = [
    {
      name: "Realme XT ",
      price: "15,999",
      description:
        "The Realme XT smartphone is here to make your life more fun. From capturing amazing pictures with this phone’s 64 MP AI Quad camera to flaunting its hyperbola curved glass design, you will fall in love with this smartphone instantly. That’s not all, this smartphone comes with the Qualcomm Snapdragon 712 processor for efficient performance."
    },
    {
      name: "Realme C2 ",
      price: "6,999",
      description:
        "Say hello to the Realme C2 smartphone whose stylish design encompasses plenty of features, such as a 13 MP + 2 MP rear camera, a 5 MP front camera, and a 4000 mAh battery to make your life simpler"
    },
    {
      name: "Realme X2 ",
      price: "26,999",
      description:
        "This edition of the Realme X phone is all about offering you an immersive cinematic experience - it boasts a 91.2% screen-to-body ratio and a 16.58 cm (6.53) super AMOLED screen. Staying ahead of the game, this phone comes with a pop-up selfie camera and an in-display fingerprint scanner both of which are neatly tucked under the display. Enjoy a seamless experience, whether you’re gaming (thanks to its Hyper Boost 2.0 acceleration engine and robust hardware), or simply browsing content on your phone."
    }
  ];
  return (
    <div>
      <Grid container spacing={3}>
        {initialProducts.map(product => (
          <Grid item xs>
            <ProductCard {...product} />
          </Grid>
        ))}
        {/* <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>xs</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ProductList;
