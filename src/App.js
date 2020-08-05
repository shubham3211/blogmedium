import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { useUserContext } from "./context/UserContext";
import { getToken } from "./Utils/func";
import { api } from "./Utils/api";
import { CircularProgress } from "@material-ui/core";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/BlogDetail";
import CreateBlog from "./Pages/CreateBlog";
import Header from "./Components/Header";

function App() {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useUserContext();

  useEffect(() => {
    setLoading(true);
    async function verify() {
      try {
        let jwt = getToken();
        const response = await api.post(
          "/user/verify",
          {},
          {
            headers: {
              Authorization: jwt
            }
          }
        );
        if (response.data.done) {
          console.log("response.data.user :>> ", response.data.user);
          setUser(response.data.user);
        }
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.error(err);
      }
    }
    verify();
  }, [setUser]);

  if (loading) {
    return (
      <div
        style={{
          paddingTop: "20%",
          height: "100%",
          fontSize: "200px",
          textAlign: "center"
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <Router>
      <Header />
      <Switch>
        {user && Object.keys(user).length ? (
          <>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/blog" render={props => <BlogDetail {...props} />} />

            <Route exact path="/">
              <CreateBlog />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
