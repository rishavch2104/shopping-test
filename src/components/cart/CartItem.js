import React from "react";
import { connect } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { shoppingItems } from "./../../shoppingItems";
import {
  removeItem,
  addItem,
  clearItemFromCart
} from "./../../redux/cart/cart.actions";
import DeleteIcon from "@material-ui/icons/Delete";
const CartItem = props => {
  const { id, quantity, clearItem, addItem, removeItem } = props;
  const item = shoppingItems[id];
  return (
    <Box display="flex">
      <Box width="10%">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={item.image} />
        </ListItemAvatar>
      </Box>
      <Box width="50%">
        <Typography variant="h6">{item.name}</Typography>
        <Typography variant="body1">{item.dispPrice}</Typography>
      </Box>
      <Box width="40%">
        <Box
          display="flex"
          justifyContent="flex-start"
          flexDirection="row"
          width="100%"
        >
          <RemoveIcon onClick={() => removeItem(item)} />
          <Typography display="inline">{quantity}</Typography>
          <AddIcon onClick={() => addItem(item)} />
          <DeleteIcon onClick={() => clearItem(item)} />
        </Box>
      </Box>

      <Box width="5%" mr="auto">
        <Typography>{quantity * item.price}</Typography>
      </Box>
    </Box>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CartItem);
