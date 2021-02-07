import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { setViewNav } from "../redux/viewNavSlice";
import MakeUser from "../components/MakeUser";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  links: {
    // cursor: "pointer",
  },
});

export default function Users() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users);
  const filteredUsers = users.filter(
    (user) => user.login !== "создать пользователя"
  );

  const toUser = (id) => {
    history.push(`/dashboard/currentUser/${id}`);
    dispatch(setViewNav(false));
  };

  const handleEdit = (id) => {
    history.push(`/dashboard/editUser/${id}`);
    dispatch(setViewNav(false));
  };

  const tableUsers = (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="users table">
        <TableHead>
          <TableRow>
            <TableCell>Пользователь</TableCell>
            <TableCell align="right">Должность</TableCell>
            <TableCell align="right">Телефон</TableCell>
            <TableCell align="right">Логин</TableCell>
            <TableCell align="right">Информация</TableCell>
            <TableCell align="right">Редактировать</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow className={classes.links} key={user.id}>
              <TableCell component="th" scope="row">
                {user.lastName} {user.firstName} {user.patronymic}
              </TableCell>
              <TableCell align="right">{user.position}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.login}</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => toUser(user.id)}>
                  <AccountBoxIcon />
                </IconButton>
              </TableCell>
              <TableCell align="right">
                <IconButton onClick={() => handleEdit(user.id)}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return filteredUsers.length ? tableUsers : <MakeUser />;
}
