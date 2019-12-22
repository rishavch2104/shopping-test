import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { shoppingItems } from "./../../shoppingItems";
const CartItem = props => {
  const { id, quantity } = props;
  const item = shoppingItems[id];
  return (
    <ListItem>
      <ListItemText>
        <Typography>{item.name}</Typography>
      </ListItemText>

      <ListItemSecondaryAction>
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
            <RemoveIcon />
            <Typography display="inline">{quantity}</Typography>

            <AddIcon />
          </Box>
        </Box>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
