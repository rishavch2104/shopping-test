import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { shoppingItems } from "./../shoppingItems";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: "100%",
    height: "auto"
  }
}));
const ProductPage = props => {
  const { id } = props;
  const classes = useStyles();

  const item = shoppingItems[id];

  const handleRemoveItem = () => {
    alert("Remove");
  };

  return (
    <Container fixed style={{ marginTop: "30px" }}>
      <Grid container spacing={7}>
        <Grid item xs={4}>
          <img className={classes.image} src={item.image} alt="phone"></img>
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" flexDirection="column">
            <Typography variant="h4" gutterBottom>
              {item.name}
            </Typography>
            <Divider />
            <Typography variant="overline">Price</Typography>
            <Typography variant="h5">{item.dispPrice}</Typography>
            <Divider />
            <Typography variant="overline">Description</Typography>
            <Typography variant="body2">{item.description}</Typography>
            <Divider />
            <Typography variant="overline">Features</Typography>
            {item.features.map(feature => (
              <Typography variant="body2">{feature}</Typography>
            ))}
            <Divider />
            <Box mt="10px" display="flex" justifyContent="space-between">
              <Typography variant="button" display="inline">
                Quantity
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection="row"
                width="20%"
              >
                <RemoveIcon onClick={handleRemoveItem} />
                <Typography display="inline">0</Typography>

                <AddIcon />
              </Box>
            </Box>
            <br />
            <Button color="primary" variant="contained">
              Add To Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
