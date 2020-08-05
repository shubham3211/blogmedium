import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, Redirect } from "react-router-dom";
import CustomInput from "../../Components/input";
import { api } from "../../Utils/api";
import { getToken } from "../../Utils/func";
import { TextareaAutosize } from "@material-ui/core";
import { WithContext as ReactTags } from "react-tag-input";
import "./style.css";

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

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
  },
  width: {
    width: "100%"
  }
}));

export default function CreateBlog() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState("");

  const handleDelete = i => {
    setTags(arr => {
      return arr.filter((tag, index) => index !== i);
    });
  };

  const handleAddition = tag => {
    setTags(arr => {
      return [...arr, tag];
    });
  };

  const createBlogRequest = async () => {
    try {
      const token = getToken();
      setMessage("creating");
      const response = await api.post(
        "/blog/create",
        {
          title,
          image,
          body,
          tags: tags.map(ele => ele.text)
        },
        {
          headers: {
            Authorization: token
          }
        }
      );
      if (response.data.done) {
        setMessage("Blog Created");
      } else {
        setMessage("Blog not created");
      }
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
          Create Blog
        </Typography>
        <form className={classes.form} noValidate>
          <CustomInput
            required={true}
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus={true}
            value={title}
            setValue={setTitle}
          />
          <CustomInput
            required={true}
            id="image"
            label="Image Url"
            name="image"
            autoComplete="image"
            autoFocus={true}
            value={image}
            setValue={setImage}
          />
          <TextareaAutosize
            aria-label="minimum height"
            rowsMin={3}
            style={{ width: "100%" }}
            placeholder="Blog"
            value={body}
            onChange={e => {
              e.preventDefault();
              e.persist();
              setBody(e.target.value);
            }}
          />
          <ReactTags
            tags={tags}
            handleDelete={handleDelete}
            handleAddition={handleAddition}
            delimiters={delimiters}
            suggestions={[]}
            handleDrag={() => {}}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => {
              createBlogRequest();
            }}
          >
            Create Blog
          </Button>
          <Grid container>
            <Grid item>
              <Link to="/blogs" variant="body2">
                {"See your blogs"}
              </Link>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>Blog Creation Message : {message}</Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
