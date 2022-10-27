import react from 'react';

const Player = (props) =>{
  return(
    <div className="c-player">
      <audio></audio>
      <h4></h4>
      {/* Details */}
      {/* Controls */}
      <p><strong>Next up:</strong>{props.nextSong.title}</p>
    </div>
  );
}