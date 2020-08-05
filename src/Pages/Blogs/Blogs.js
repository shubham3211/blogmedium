import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Blog from "../../Components/Blog";
import { useUserContext } from "../../context/UserContext";
import { api } from "../../Utils/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUserContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/blog/${user._id}`);
        setBlogs(response.data.blogs);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [user._id]);

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
    <Grid container spacing={2}>
      {blogs.map((blog, index) => {
        return (
          <Grid item xs={11} key={index}>
            {" "}
            <Blog blog={blog} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Blogs;
