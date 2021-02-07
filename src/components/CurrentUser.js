import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setViewNav } from "../redux/viewNavSlice";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: 150,
  },
}));

export default function CurrentUser({ match }) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = match.params;

  const users = useSelector((state) => state.users);
  const currentUser = users.find((user) => user.id === userId);

  const handleEdit = () => history.push(`/dashboard/editUser/${userId}`);

  const toHome = () => {
    history.push("/dashboard/users");
    dispatch(setViewNav(true));
  };

  return (
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
          <Grid container spacing={2} direction="column" alignItems="center">
            <Grid item>
              <Typography>{currentUser.lastName}</Typography>
            </Grid>
            <Grid item>
              <Typography> {currentUser.firstName}</Typography>
            </Grid>
            <Grid item>
              <Typography> {currentUser.patronymic}</Typography>
            </Grid>
            <Grid item>
              <Typography>{currentUser.position}</Typography>
            </Grid>
            <Grid item>
              <Typography>{currentUser.phone}</Typography>
            </Grid>
            <Grid item>
              <Typography>{currentUser.login}</Typography>
            </Grid>
            <Grid item>
              <Typography>{currentUser.password}</Typography>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Grid item>
              <Button
                type="button"
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={toHome}
              >
                на главную
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                редактировать
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
