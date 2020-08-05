import Toolbar from "@material-ui/core/Toolbar";
import { AppBar, Box, Grid, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { setToken } from "../Utils/func";

function Appbar() {
  const { user, setUser } = useUserContext();

  return (
    <div>
      <Box mb={2}>
        <AppBar
          position="static"
          style={{ backgroundColor: "white", marginTop: "0px" }}
        >
          <Toolbar>
            <Grid container justify="space-between" alignItems="center">
              <Grid item xs={3}>
                <img
                  src="https://theme.zdassets.com/theme_assets/224203/cbbbc402d021a605f451c56e29211eb0c0ae9c7a.png"
                  alt=""
                  style={{ width: "100px", height: "20px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid item xs={4} style={{ alignSelf: "flex-end" }}>
                    <Button variant="contained" color="secondary">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/blogs"
                      >
                        Blogs
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item xs={4} style={{ alignSelf: "flex-end" }}>
                    <Button variant="contained" color="secondary">
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        to="/"
                      >
                        Create Blog
                      </Link>
                    </Button>
                  </Grid>
                  <Grid item xs={4} style={{ alignSelf: "flex-end" }}>
                    {user ? (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => {
                          setUser({});
                          setToken("");
                        }}
                      >
                        Logout
                      </Button>
                    ) : (
                      <Button variant="contained" color="secondary">
                        <Link to="/login">Login</Link>
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Appbar;
