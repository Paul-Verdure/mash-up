import { useState } from "react"
import axios from "axios"

function CreatePlaylist() {
    const [newPlaylist, setNewPlaylist] = useState()
    const handleClick = () => {
  
              axios.post("http://localhost:3001/playlist", {
                name: 'My playlist',
                description: 'Our party playlist',
                public:false,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
    };


    return (
        <div>
                 <div>
        <button onClick={handleClick}> Create a playlist</button>
        </div>


        </div>
    )
}

export default CreatePlaylist
