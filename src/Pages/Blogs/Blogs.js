import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Blog from "../../Components/Blog";
import { useUserContext } from "../../context/UserContext";
import { api } from "../../Utils/api";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const { user } = useUserContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get(`/blog/${user._id}`);
        setBlogs(response.data.blogs);
      } catch (err) {}
    };
    fetchBlogs();
  }, [user._id]);

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
