import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import StoreIcon from "@material-ui/icons/Store";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Navbar = props => {
  const { history } = props;
  const classes = useStyles();

  const handleCartClick = () => {
    history.push("/cart");
  };
  const handleShopClicked = () => {
    history.push("/");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleShopClicked}
        >
          <StoreIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Shopping App
        </Typography>

        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleCartClick}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Navbar);
