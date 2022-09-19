import React, { useState, useEffect } from "react";
import SoundList from "./components/sound-list/sound-list.component";
import TextBox from "./components/text-box/text-box.compontent";
import Title from "./components/title/title.component";
import HelpDialog from "./components/help-dialog/help-dialog.component";
import InfoDialog from "./components/info-dialog/info-dialog.component";
import { registerWebPlugin } from "@capacitor/core";
import { FileSharer } from "@byteowls/capacitor-filesharer";

import data from "./sounds.json";

import "./App.css";

export default function App() {
  const [sounds, setSounds] = useState([]);
  const [input, setInput] = useState("");
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    registerWebPlugin(FileSharer);
    setSounds(data);
  });

  function handleChange(event) {
    const value = event.target.value;
    setInput(value);
  }

  const filteredSounds = sounds.filter((sound) =>
    sound.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="App">
      <Title
        onHelpClick={() => setIsHelpOpen(true)}
        onInfoClick={() => setIsInfoOpen(true)}
        volume={volume}
        setVolume={setVolume}
      />
      <TextBox onChange={handleChange} input={input} />
      <SoundList
        sounds={filteredSounds}
        volume={volume}
        setVolume={setVolume}
      />
      <footer>&copy; Jakub Kowieski</footer>
      <HelpDialog open={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
      <InfoDialog open={isInfoOpen} onClose={() => setIsInfoOpen(false)} />
    </div>
  );
}
