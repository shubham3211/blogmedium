import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import CustomInput from "../../Components/input";
import { useUserContext } from "../../context/UserContext";
import { api } from "../../Utils/api";
import { setToken } from "../../Utils/func";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { setUser } = useUserContext();

  const signupRequest = async () => {
    try {
      const response = await api.post("/user/signup", {
        email,
        password,
        firstname,
        lastname
      });
      setUser(response.data.user);
      setToken(response.data.jwt);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <CustomInput
            required={true}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus={true}
            value={email}
            setValue={setEmail}
          />
          <CustomInput
            required={true}
            id="firstname"
            label="First Name"
            name="firstname"
            autoComplete="firstname"
            autoFocus={true}
            value={firstname}
            setValue={setFirstname}
          />
          <CustomInput
            required={true}
            id="lastname"
            label="Last Name"
            name="lastname"
            autoComplete="lastname"
            autoFocus={true}
            value={lastname}
            setValue={setLastname}
          />
          <CustomInput
            required={true}
            id="password"
            label="Password"
            name="password"
            autoComplete="current-password"
            autoFocus={true}
            value={password}
            setValue={setPassword}
            type="password"
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              signupRequest();
            }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
