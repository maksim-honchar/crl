import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { userEdit } from "./../redux/usersSlice";

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

export default function EditUser({ match }) {
  const { userId } = match.params;
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector((state) => state.users);
  const currentUser = users.find((user) => user.id === userId);

  const [lastName, setLastname] = useState(currentUser.lastName);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [patronymic, setPatronymic] = useState(currentUser.patronymic);
  const [position, setPosition] = useState(currentUser.position);
  const [phone, setPhone] = useState(currentUser.phone);
  const [login, setLogin] = useState(currentUser.login);
  const [password, setPassword] = useState(currentUser.password);
  const [confirmPass, setConfirmPass] = useState(currentUser.password);

  const handleLastName = (e) => setLastname(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handlePatronymic = (e) => setPatronymic(e.target.value);
  const handlePosition = (e) => setPosition(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleLogin = (e) => setLogin(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPass = (e) => setConfirmPass(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    if (password === confirmPass) {
      dispatch(
        userEdit({
          id: userId,
          lastName,
          firstName,
          patronymic,
          position,
          phone,
          login,
          password,
        })
      );
      history.push(`/currentUser/${currentUser.id}`);
      setLastname("");
      setFirstName("");
      setPatronymic("");
      setPosition("");
      setPhone("");
      setLogin("");
      setPassword("");
      setConfirmPass("");
    }
  }

  const backToUser = () => history.push(`/currentUser/${currentUser.id}`);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Редактировать пользователя
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                autoFocus
                value={lastName}
                onChange={handleLastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Имя"
                name="firstName"
                autoComplete="lname"
                value={firstName}
                onChange={handleFirstName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="patronymic"
                label="Отчество"
                name="patronymic"
                value={patronymic}
                onChange={handlePatronymic}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="position"
                label="Должность"
                name="position"
                value={position}
                onChange={handlePosition}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Телефон"
                name="phone"
                autoComplete="phone"
                value={phone}
                onChange={handlePhone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="login"
                label="Логин"
                name="login"
                value={login}
                onChange={handleLogin}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPass"
                label="Подтверждение"
                type="password"
                id="confirmPass"
                value={confirmPass}
                onChange={handleConfirmPass}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Внести изменения
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={backToUser}
          >
            Отмена
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
  );
}
