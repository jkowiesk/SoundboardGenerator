import React, { useState } from "react";
import useSound from "use-sound";
import { Plugins } from "@capacitor/core";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";

import "./sound-card.styles.css";

const { FileSharer } = Plugins;

const isPlayingStyle = {
  background: "#444444",
  "-webkit-text-fill-color": "#da0037",
  "-webkit-text-stroke-width": "0.5px",
  "text-shadow":
    "1px 1px 0 #171717, -0.5px -0.5px 0 #171717, 0.5px -0.5px 0 #171717, -0.5px 0.5px 0 #171717, 0.5px 0.5px 0 #171717",
  "-webkit-text-stroke-color": "#171717",
};

const shareBtn = {
  padding: "10px",
  color: "#000",
};

const SoundCard = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const soundUrl = `/sounds/${props.name}.mp3`;
  const [play, { stop }] = useSound(soundUrl, {
    volume: props.volume / 100,
    onend: () => {
      setIsPlaying(false);
    },
  });

  const handleShare = (event) => {
    event.stopPropagation();
    fetch(`/sounds/${props.name}.mp3`)
      .then((r) => r.blob())
      .then((blob) => {
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = function () {
          let result = reader.result;
          let base64Data = result.split(",")[1];

          FileSharer.share({
            filename: `${props.name}.mp3`,
            base64Data,
            contentType: "audio/mpeg",
          });
        };
      });
  };

  return (
    <div
      className="card-container"
      onClick={(event) => {
        if (isPlaying) {
          stop();
          setIsPlaying(false);
          return;
        }
        setIsPlaying(true);
        play();
      }}
      style={isPlaying ? isPlayingStyle : null}
    >
      <img src="./images/sound.png" alt="img" />
      <div>
        <h1>{props.name}</h1>
        <IconButton
          size="small"
          onClick={handleShare}
          style={isPlaying ? shareBtn : { ...shareBtn, color: "#444444" }}
        >
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SoundCard;
