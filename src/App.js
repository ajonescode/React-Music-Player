import React from "react";
import "./style.css";
import {useState} from 'react';

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
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
