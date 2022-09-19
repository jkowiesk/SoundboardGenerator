import React from "react";
import Grid from "@material-ui/core/Grid";
import { Dialog } from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { makeStyles } from "@material-ui/core/styles";

import "./info-dialog.styles.css";

const style = {
  "-webkit-text-fill-color": "#da0037",
  "-webkit-text-stroke-width": "0.5px",
  "text-shadow":
    "1px 1px 0 #171717, -0.5px -0.5px 0 #171717, 0.5px -0.5px 0 #171717, -0.5px 0.5px 0 #171717, 0.5px 0.5px 0 #171717",
  "-webkit-text-stroke-color": "#171717",
};

const useStyles = makeStyles((theme) => ({
  root: { background: "#444444" },
  dialog: {
    padding: 0,
    margin: 0,
  },
  grid: {
    margin: "0",
    padding: "0",
    "text-align": "center",
  },
  statue: {
    width: "9rem",
    padding: 0,
  },
  copyright: {
    ...style,
    "font-family": '"PT Serif", serif',
    "& p": { margin: 0 },
  },
  name: { ...style, "& p": { margin: "10px" } },
  quote: { "font-family": "DancingSpirit, cursive", "font-size": "1.5rem" },
  version: { color: "#2d2821", "& p": { margin: 0 } },
}));

export default function InfoDialog(props) {
  const classes = useStyles();
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <DialogContent className={classes.root}>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={classes.grid}
        >
          <Grid item xs="12" sm="4">
            <img
              src="/images/poza.jpg"
              alt="suhy_poza"
              className={classes.statue}
            />
          </Grid>
          <Grid item xs="12" sm="4" className={classes.copyright}>
            <p>© Kowies Production</p>
            <a href="https://www.facebook.com/jakub.kowieski.1" target="_blank">
              <img class="facebook" src="/images/facebook.png" alt="f" />
            </a>
          </Grid>
          <Grid item xs="12" sm="4" className={classes.name}>
            <p className={classes.quote}>" Dziękuję za każde pobranie "</p>
            <p>Przemsysław Suchodolski</p>
          </Grid>
          <Grid item xs="12" className={classes.version}>
            <p>v1.420</p>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
