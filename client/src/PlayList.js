import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"

const PlayList = () => {
    const {userFavoritList, setUserFavoritList} = useContext(TrackContext)


    return (
        <div className="container">
            {
                userFavoritList.map(dataUri=>(
                    <h1>{dataUri}</h1>
                ))
            }
        </div>
    )
}

export default PlayList;