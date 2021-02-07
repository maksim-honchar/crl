import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setNav } from "../redux/navSlice";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const nav = useSelector((state) => state.nav.tab);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toMakeUser = () => {
    history.push(`/dashboard/makeuser/`);
    dispatch(setNav(1));
  };

  const toAll = () => {
    history.push("/dashboard/users");
    dispatch(setNav(0));
  };

  const toTextPage = () => {
    history.push("/dashboard/textPage");
    dispatch(setNav(2));
  };

  const toExit = () => {
    history.push("/");
    window.location.reload(false);
  };

  useEffect(() => {
    setValue(nav);
  }, [nav]);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Главная" onClick={toAll} />
        <Tab label="Создать" onClick={toMakeUser} />
        <Tab label="Текст" onClick={toTextPage} />
        <Tab label="Выйти" onClick={toExit} />
      </Tabs>
    </Paper>
  );
}
