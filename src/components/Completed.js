import React from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const Completed = props => {
  const { history } = props;
  const handleHomeClick = () => {
    history.push("/");
  };
  return (
    <Box
      mt="20px"
      margin="auto"
      height="auto"
      width="500px"
      display="flex"
      flexDirection="column"
    >
      <Typography variant="h3">
        Your Order has been placed Succesfully!
      </Typography>
      <Button variant="contained" onClick={handleHomeClick}>
        Go To Home
      </Button>
    </Box>
  );
};

export default withRouter(Completed);
