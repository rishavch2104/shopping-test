import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { shoppingItems } from "./../../shoppingItems";
import { ListSubheader } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
const CartItem = props => {
  const { id, quantity } = props;
  const item = shoppingItems[id];
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={item.image} />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography>{item.name}</Typography>}
        secondary={item.dispPrice}
      />
      <ListSubheader>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="row"
          width="100%"
        >
          <RemoveIcon />
          <Typography display="inline">{quantity}</Typography>

          <AddIcon />
          <DeleteIcon />
        </Box>
      </ListSubheader>
      <ListItemSecondaryAction>
        <Typography>{quantity * item.price}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
