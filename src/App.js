import React from "react";
import "./style.css";
import {useState} from 'react';
import Player from './Components/Player';

export default function App() {

const [songs, setSongs] = useState([
{
  title: "Fly ",
  artist: "Bandino",
  img_src: "",
  src: ""

}

])

  return (
    <div>
     <Player song = {songs[currrentSongIndex]} nextSong = {songs[nextSongIndex]} />
    </div>
  );

  const [currrentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currrentSongIndex + 1);
}
