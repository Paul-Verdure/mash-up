import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"
import PlayerPlayList from "./PlayerPlayList";


const PlayList = () => {
    const {userFavoritList, setUserFavoritList} = useContext(TrackContext)

    console.log("lecteur", userFavoritList);
    return (
        <div className="container d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}>
            {
                userFavoritList.map(data=>(
                    <div>
                    <img src={data.albumUrl} style={{ height: "64px", width: "64px" }} />
                    <div className="ml-3">
                        <div>{data.title}</div>
                        <div className="text-muted">{data.artist}</div>
                    </div>
                    </div>
                ))
            }
            <div><PlayerPlayList /></div>
        </div>
    )
}

export default PlayList;