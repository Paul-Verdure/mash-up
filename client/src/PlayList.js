import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"

const PlayList = () => {
    const {dropDownPlayList} = useContext(TrackContext)
    

    return (
        <div className="container">
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