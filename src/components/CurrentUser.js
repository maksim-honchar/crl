import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userAdd } from "./../redux/usersSlice";

import NavBar from "./NavBar";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CurrentUser({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const { userId } = match.params;

  const users = useSelector((state) => state.users);
  const currentUser = users.find((user) => user.id === userId);

  function handleEdit(e) {
    e.preventDefault();
    history.push(`/dashboard/editUser/${userId}`);
  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Текущий пользователь
          </Typography>
          <form onSubmit={handleEdit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>{currentUser.lastName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography> {currentUser.firstName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography> {currentUser.patronymic}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{currentUser.position}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{currentUser.phone}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{currentUser.login}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>{currentUser.password}</Typography>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Редактировать
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Уже есть аккаунт? Войти в систему
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
