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

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
const ProductCard = props => {
  const { name, price, id, history } = props;
  const classes = useStyles();

  const handleDetailClicked = () => {
    history.push(`/product/${id}`);
  };
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>

          <Typography variant="h6">{price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup color="primary">
          <Button size="small" color="primary" onClick={handleDetailClicked}>
            View Details
          </Button>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};

export default withRouter(ProductCard);
