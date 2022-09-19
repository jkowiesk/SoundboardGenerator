import React from "react";
import { Dialog, DialogTitle, DialogContentText } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { projectName } from "../../variables";

import "./help-dialog.styles.css";

const useStyles = makeStyles((theme) => ({
  title: {
    "padding-top": "10px",
    margin: "0px",
    color: "#da0037",
    "text-align": "center",
  },
  text: {
    "& p": {
      "font-size": "1rem",
      color: "#171717",
      padding: "0% 10%",
    },
  },
}));

export default function HelpDialog(props) {
  const classes = useStyles();
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogTitle className={classes.title}>
        <h2>{`Welcome to ${projectName}!`}</h2>
      </DialogTitle>
      <DialogContentText className={classes.text}>
        <p>This is a SoundBoard app</p>
        <p>
          Thanks to the search engine, you can find your favorite sound in no
          time eye! You can also share the sound with your friends via the share
          button!
        </p>
        <p>
          The use is very simple, just click on the card and it starts the sound
          goes off, and to turn it off, click again.
        </p>
      </DialogContentText>
    </Dialog>
  );
}
