import {TrackContext} from "./context/TrackContext";
import { useContext } from "react"
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

const PlayList = () => {
    const {dropDownPlayList,setDropDownPlayList} = useContext(TrackContext)
    

    return (
        <div className="container d-flex m-2 align-items-center"
        style={{ cursor: "pointer" }}>
            {
                dropDownPlayList.map((data,index)=>(
                    <div key={index}>
                    <h1>Artiste : {data.title}</h1>
                    <h1>Title : {data.artist}</h1>
                    <img src={data.albumUrl} alt="url album"/>
                    <button onClick={()=> {
                       
                        
                        setDropDownPlayList(dropDownPlayList.filter(song=> song.uri !== data.uri))
                    
                        
                        
                        
                        
                        }}>-</button>
                    </div>
                ))
            }
            {console.log("dropDownList",dropDownPlayList)}
            
        </div>
        
    )
    
}

export default PlayList;