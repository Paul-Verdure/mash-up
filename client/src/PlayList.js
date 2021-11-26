import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"

const PlayList = () => {
    const {userFavoritList, setUserFavoritList} = useContext(TrackContext)


    return (
        <div className="container">
            {
                userFavoritList.map(dataUri=>( 
                    <div>
                        <h1>{dataUri.uri}</h1>
                        <img src={dataUri.title} alt=""/>
                    </div>
                ))
            }
        </div>
    )
}

export default PlayList;