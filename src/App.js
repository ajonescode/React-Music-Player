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
  src: "https://anthonyjonesmusic.s3.us-east-2.amazonaws.com/Bounced+Trax/fly+prod+bandino+88_Master.wav"

},
{
  title: "Drill ",
  artist: "Bandino",
  img_src: "",
  src: ""
}

])
const [currrentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currrentSongIndex + 1); 
  return (
    <div>
     <Player song = {songs[currrentSongIndex]} nextSong = {songs[nextSongIndex]} />
    </div>
  );


}
