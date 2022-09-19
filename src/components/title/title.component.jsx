import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import VolumeSlider from "../volume-slider/volume-slider.component";

import "./title.styles.css";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    background: "#da0037",
    display: "flex",
  },
  helpIcon: {
    color: "whitesmoke",
    float: "left",
  },
  infoIcon: {
    color: "whitesmoke",
    float: "right",
  },
  volume: {
    margin: "auto",
    "text-allign": "center",
  },
}));

const Title = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Grid container spacing={0}>
            <Grid item xs="3">
              <IconButton
                edge="start"
                onClick={props.onHelpClick}
                className={classes.helpIcon}
              >
                <HelpOutlineIcon fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs="6" className={classes.volume}>
              <VolumeSlider volume={props.volume} setVolume={props.setVolume} />
            </Grid>
            <Grid item xs="3"></Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <img className="titleImg" src="/images/logo.png" alt="SuhySoundBoard" />
    </div>
  );
};

export default Title;
