import React from "react"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import New from "./New";


const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e48a09962c39496da4a072ca196590e4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  // Local storage array user

  const getLocalStorage = () => {

    let allStoredUsers = localStorage.getItem("UserList")
    if (allStoredUsers){
      return (allStoredUsers = JSON.parse(localStorage.getItem("UserList")))
     
    }else{
      return [

        {
          pseudo: "",
          password: ""
        },
      ];
    }
  }   

  
  const [loginData, setLoginData]= useState(getLocalStorage());
  const [newUserName, setNewUserName] = useState('');
  const [newUserPassword,setNewUserPassword] = useState('');
  const [newCode, setNewCode] = useState(false);

  const handleNewUserName = (event) => {
    setNewUserName(event.target.value)
  };

  const handleNewUserPassword = (event)=> {
    setNewUserPassword(event.target.value)


  };

  const showNew = () => {
    setNewCode(!newCode);
  }

  const handleClick = (e) => {
  e.preventDefault()
    
    setLoginData((prevUsers) => [
      ...prevUsers,
      {
        id: uuidv4(),
        pseudo: newUserName,
        password: newUserPassword
      },
    ]);

    // record products in local storage
    localStorage.setItem("UserList",JSON.stringify(loginData.concat([
      {
        id: uuidv4(),
        pseudo: newUserName,
        password: newUserPassword
      },
    ]))) 
    

    console.log(loginData)
  }

  // const {pseudo, password} = loginData; 

  // localStorage.setItem("key", "pseudo")

  // useEffect(() => {
  //   // storing input name
  //   localStorage.setItem("pseudo", JSON.stringify(pseudo));
  // }, [pseudo]);
  //   localStorage.setItem("pseudo", JSON.stringify(pseudo));
  
  return (
    <Container
      className="home"
      style={{ minHeight: "100vh" }}
    >
          <div className="signUpLoginBox">
              <div className="slContainer">
                  <div className="formBoxleftSignUp"></div>
                  <div className="formBoxRight">
                  <h2>Entre ton pseudo & ton code pour entrer sur la playlist collaborative </h2>
                      <div className="formContent">
                          <form onClick={handleClick} >

                              <div >
                              <div className="inputBox">
                                  <input onChange={handleNewUserName} value={newUserName} type="text" id="pseudo" placeholder="Pseudo"/>
                                  <label htmlFor="pseudo">Pseudo</label>
                              </div>
                              <div className="inputBox">
                                <input onChange={handleNewUserPassword} value={newUserPassword} type="text" id="password" placeholder="Code de la Playlist"/>
                                <label htmlFor="password">Entre le code de la Playlist</label>
                              </div>
                            </div>
                          

                                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                                  Entre sur la Playlist
                                </a>
                                <button onClick={showNew}>Créer une nouvelle playlist</button>
                                {newCode ? <New/> : null}
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </Container>
  )
}



    