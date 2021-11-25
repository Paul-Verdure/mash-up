import React from "react"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e48a09962c39496da4a072ca196590e4&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {

  const data = {
    pseudo: '',
    password:'',
  }

  const [loginData, setLoginData]= useState(data);

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.id]: e.target.value});
  }

  const {pseudo, password} = loginData; 

  localStorage.setItem("key", "pseudo")
  useEffect(() => {
    // storing input name
    localStorage.setItem("pseudo", JSON.stringify(pseudo));
  }, [pseudo]);
  localStorage.setItem("pseudo", JSON.stringify(pseudo));
  
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
          <div className="signUpLoginBox">
              <div className="slContainer">
                  <div className="formBoxleftSignUp"></div>
                  <div className="formBoxRight">
                  <h2>Entre ton pseudo & ton code pour entrer sur la playlist collaborative </h2>
                      <div className="formContent">
                          <form>
                              <div className="inputBox">
                                  <input onChange={handleChange} value={pseudo} type="text" id="pseudo" placeholder="Pseudo"/>
                                  <label htmlFor="pseudo">Pseudo</label>
                              </div>
                              <div className="inputBox">
                                <input onChange={handleChange} value={password} type="text" id="password" placeholder="Code de la Playlist"/>
                                <label htmlFor="password">Entre le code de la Playlist</label>
                              </div>
                                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                                  Entre sur la Playlist
                                </a>
                              <button>Créer une nouvelle playlist</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
    </Container>
  )
}



    