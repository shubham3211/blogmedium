import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import Author from "../../Components/Author";

const Dot = () => {
  return (
    <div
      style={{
        width: "5px",
        height: "5px",
        backgroundColor: "#9e9e9e",
        borderRadius: "100%",
        marginLeft: "5px",
        marginRight: "5px"
      }}
    ></div>
  );
};

const BlogContent = ({ body }) => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h4">Why System Design</Typography>
        <Box mt={2}>
          <Typography style={{ color: "#9e9e9e" }}>{body}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

function BlogDetail(props) {
  const { blog } = props.location.state;
  console.log("blog :>> ", blog);
  return (
    <Box ml={11} mt={10}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4">{blog.title}</Typography>
          <Typography variant="subtitle1" style={{ color: "#9e9e9e" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              7 Modules <Dot /> 24 mins read <Dot /> Beginners
            </div>
          </Typography>
          <Box mt={2}>
            <Author />
          </Box>
          <Box mt={3}>
            <BlogContent body={blog.body} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BlogDetail;
