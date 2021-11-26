import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"

const PlayList = () => {
    const {userFavoritList, setUserFavoritList} = useContext(TrackContext)


    return (
        <div className="container">
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
        </div>
    )
}

export default PlayList;