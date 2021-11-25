import React from "react"
import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import "./login.css";
import { Header } from "./components/header/Header";





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


  
  return (
    <Container
      className="home"
 
    >
      <Header />
          <div className="signUpLoginBox">
              <div className="slContainer">
                  <div className="text_explain">
                  <h2>Entre ton pseudo & ton code pour entrer sur la playlist collaborative </h2>
                  </div>
                      <div className="formContent">
                          <form>
                              <div className="inputBox">
                                  <label htmlFor="pseudo">Pseudo</label>
                                  <input 
                                    onChange={handleChange} 
                                    value={pseudo} 
                                    type="text" 
                                    id="pseudo" 
                                    placeholder="Pseudo" />
                              </div>
                              <div className="inputBox">
                                <label htmlFor="password">Entre le code de la Playlist</label>
                                <input onChange={handleChange} value={password} type="text" id="password" placeholder="Code de la Playlist"/>
                              </div>
                              <div className="button__enterplay">
                                <a className="btn btn-success btn-lg" href={AUTH_URL}>
                                  Entre sur la Playlist
                                </a>
                              </div>
                              <div className="button__newplay">
                              <button className="btn btn-success btn-lg">Créer une nouvelle playlist</button>
                              </div>
                          </form>
                      </div>
              </div>
          </div>
    </Container>
  )
}



    