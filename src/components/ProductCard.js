import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    width: "100%",
    height: "300px"
  }
});
const ProductCard = props => {
  const { name, dispPrice, id, history, image } = props;
  const classes = useStyles();

  const handleDetailClicked = () => {
    history.push(`/product/${id}`);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>

          <Typography variant="h6">{dispPrice}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleDetailClicked}>
          View Details
        </Button>
        <IconButton
          style={{ marginLeft: "auto" }}
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withRouter(ProductCard);
