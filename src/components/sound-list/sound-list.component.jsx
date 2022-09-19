import React, { useState, useEffect } from "react";
import SoundCard from "../sound-card/sound-card.component";

import "./sound-list.styles.css";

export default function SoundsList(props) {
  return (
    <div className="card-list">
      {props.sounds.map((sound) => {
        return (
          <SoundCard
            key={sound.id}
            id={sound.id}
            name={sound.name}
            volume={props.volume}
            setVolume={props.setVolume}
          />
        );
      })}
    </div>
  );
}
