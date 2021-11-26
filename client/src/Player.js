import { useState, useEffect,useContext } from "react"
import SpotifyPlayer from "react-spotify-web-playback"
import {TrackContext} from "./context/TrackContext";

export default function Player({ accessToken, trackUri }) {
  const {userFavoritList,setUserFavoritList} = useContext(TrackContext)
  const [play, setPlay] = useState(false)

  useEffect(() => 
  
  
  
  setPlay(true), 
  
  
  [trackUri])

  console.log("trackuri",typeof(trackUri),"favorite",typeof(userFavoritList[0]))
  if (!accessToken) return null
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      uris={trackUri? [trackUri] : userFavoritList}
      
    />
    
  )
  
}
