import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"
import PlayerPlayList from "./PlayerPlayList";


const PlayList = () => {
    const {userFavoritList, setUserFavoritList} = useContext(TrackContext)

    console.log("lecteur", userFavoritList);
    const {dropDownPlayList} = useContext(TrackContext)
    

    return (
        <div className="container d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}>
            {
                dropDownPlayList.map((data,index)=>(
                    <div key={index}>
                    <h1>Artiste : {data.title}</h1>
                    <h1>Title : {data.artist}</h1>
                    <img src={data.albumUrl} alt="url album"/>
                    </div>
                ))
            }
            {console.log("dropDownList",dropDownPlayList)}
            
        </div>
        
    )
    
}

export default PlayList;