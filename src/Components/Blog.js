import React from "react";
import { Grid, Box, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const useStyles = makeStyles(theme => ({
  rounded: {
    borderRadius: "20px"
  }
}));

function Blog({ blog }) {
  const classes = useStyles();
  const { user } = useUserContext();
  return (
    <Paper elevation={5} square={false} className={classes.rounded}>
      <Grid container>
        <Grid item xs={3}>
          <img
            src={blog.image}
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px"
            }}
            alt=""
          />
        </Grid>
        <Grid item xs={9}>
          <Box p={2}>
            <Typography variant="h5">
              <Link
                to={{
                  pathname: "/blog",
                  state: { blog }
                }}
                style={{ color: "black", cursor: "pointer" }}
              >
                {blog.title}
              </Link>
            </Typography>
            <Box mt={1}>
              <Typography>
                {blog.body.substring(0, 300)}
                {blog.body.length > 100 ? "..." : ""}
              </Typography>
            </Box>
            <Box mt={3}>
              <Grid container justify="space-between">
                <Grid item style={{ display: "flex" }}>
                  {blog.tags.map((tag, index) => {
                    return (
                      <Box ml={index > 0 ? 1 : 0}>
                        <Paper
                          className={classes.rounded}
                          elevation={2}
                          style={{ backgroundColor: "#e0e0e0" }}
                        >
                          <Box
                            p={1}
                            className={classes.rounded}
                            style={{ color: "#4caf50" }}
                          >
                            {tag}
                          </Box>
                        </Paper>
                      </Box>
                    );
                  })}
                </Grid>
                <Grid item>
                  <Box>
                    <Paper
                      className={classes.rounded}
                      elevation={2}
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      <Box
                        p={1}
                        style={{
                          display: "flex",
                          justifyContent: "space-between"
                        }}
                      >
                        <Grid>
                          <img
                            style={{ width: "20px", height: "20px" }}
                            src={
                              "https://f0.pngfuel.com/png/592/884/black-and-white-cartoon-character-programmer-computer-programming-computer-software-computer-icons-programming-language-avatar-png-clip-art-thumbnail.png"
                            }
                            alt=""
                          />
                        </Grid>
                        <Grid style={{ color: "#4caf50" }}>
                          {user.firstname + user.lastname}
                        </Grid>
                      </Box>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Blog;
