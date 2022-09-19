import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

import "./text-box.styles.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#da0037",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#da0037",
      },
      "&:hover fieldset": {
        borderColor: "#da0037",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#da0037",
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: "#da0037",
    },
  })
);

function TextBox(props) {
  const classes = useStyles();

  return (
    <div className="textBox">
      <CssTextField
        className="textField"
        id="standard"
        fullWidth
        label="Search"
        variant="outlined"
        onChange={(event) => {
          props.onChange(event);
        }}
        InputProps={{ className: classes.root }}
        InputLabelProps={{ className: classes.root }}
        value={props.input}
      />
    </div>
  );
}

export default TextBox;
