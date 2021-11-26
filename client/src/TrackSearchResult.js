import React, {useState} from "react"

export default function TrackSearchResult({ track, chooseTrack, handleClick }) {
  

  function handlePlay() {
    chooseTrack(track)
    
  }

  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
      
    >
      <img onClick={handlePlay} src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  )
}
