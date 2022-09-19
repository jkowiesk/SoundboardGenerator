import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import styles from "./volume-slider.styles.css";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "whitesmoke",
      },
      track: {
        color: "#171717",
      },
      rail: {
        color: "whitesmoke",
      },
    },
  },
});

const useStyles = makeStyles({
  root: { margin: "auto", padding: "inherit" },
  iconUp: {
    "padding-left": "10px",
    "padding-top": "8px",
    color: "whitesmoke",
  },
  iconDown: {
    "padding-right": "10px",
    "padding-top": "8px",
    color: "whitesmoke",
  },
});

export default function VolumeSlider(props) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    props.setVolume(newValue);
  };

  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item className={classes.iconDown}>
        <VolumeDown />
      </Grid>
      <Grid item xs>
        <ThemeProvider theme={muiTheme}>
          <Slider
            step="10"
            value={props.volume}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </ThemeProvider>
      </Grid>
      <Grid item className={classes.iconUp}>
        <VolumeUp />
      </Grid>
    </Grid>
  );
}
