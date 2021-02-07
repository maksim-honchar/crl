import React, { useState } from "react";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  topField: {
    marginTop: 200,
  },
  bottomField: {
    margin: "15px auto",
  },
});

export default function TextPage() {
  const classes = useStyles();

  const [fieldTop, setFieldTop] = useState("");
  const [fieldBottom, setFieldBottom] = useState("");

  const changeFieldTop = (e) => setFieldTop(e.target.value);
  const changeFieldBottom = (e) => setFieldBottom(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFieldTop("");
    setFieldBottom(fieldTop);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          fullWidth
          multiline
          rows={4}
          id="outlined field"
          label="введите текст"
          variant="outlined"
          className={classes.topField}
          value={fieldTop}
          onChange={changeFieldTop}
        />
        <TextField
          fullWidth
          multiline
          rows={4}
          id="outlined field"
          // label="Text"
          variant="outlined"
          className={classes.bottomField}
          value={fieldBottom}
          onChange={changeFieldBottom}
        />
        <Button fullWidth variant="contained" color="primary" type="submit">
          Отправить
        </Button>
      </form>
    </Container>
  );
}
