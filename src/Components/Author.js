import React from "react";
import { Grid, Box, Typography, Button, makeStyles } from "@material-ui/core";
import { useUserContext } from "../context/UserContext";

const useStyles = makeStyles(theme => ({
  color: {
    backgroundColor: "#4caf50"
  }
}));

function Author() {
  const classes = useStyles();
  const { user } = useUserContext();
  return (
    <Grid container>
      <Grid item xs={1}>
        <img
          src="https://cdn.imgbin.com/18/15/19/imgbin-programmer-computer-icons-ninja-saga-computer-software-ninja-sv3KqLf0znewPeT4j6FppjX3G.jpg"
          alt=""
          style={{ width: "100px", height: "100px", borderRadius: "100px" }}
        />
      </Grid>
      <Grid item xs={8}>
        <Box ml={3}>
          <Typography variant="h5">
            {user.firstname + " " + user.lastname}
          </Typography>
          <Typography style={{ color: "#9e9e9e" }}>
            Software developer/Engineer at Natural Mobile
          </Typography>
          <Typography style={{ color: "#9e9e9e" }}>Hyderabad</Typography>
          <Typography style={{ color: "#9e9e9e" }}>2k followers</Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Button className={classes.color} style={{ borderRadius: "30px" }}>
          Follow
        </Button>
        <Button
          className={classes.color}
          style={{ marginTop: "10px", borderRadius: "30px" }}
        >
          View Profile
        </Button>
      </Grid>
    </Grid>
  );
}

export default Author;
