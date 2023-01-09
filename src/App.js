import './App.css';
import Login from './components/Login';
import {useState, useEffect} from "react"
import Logout from './components/Logout';
import Profile from './components/Profile';
import Track from './components/Game/Track';
import Game from './components/Game/Game';




function App() {

  const [notLoggedin, setNotLoggedin] = useState(true)
  const [activeUser, setActiveUser] = useState(0)
  const [activeUserName, setActiveUserName] = useState('')
  


const attemptLogin = async (username, password) =>{
  console.log("in att logs")
  const res = await fetch(`http://localhost:8080/api/v1/users/${username}/${password}`)
  const data = await res.json()

  if(data != 0){
    setNotLoggedin(false)
    setActiveUser(data)
    setActiveUserName(username)
    console.log(data)
  }else{
    alert("Username or Password invalid")
  }
}

const onLogout = ()=>{
  console.log("onLogout Function")
  setNotLoggedin(true)
  setActiveUser(0)
}


  return (
    <div className="container">
      <h1 className="main-header">!!WELCOME TO ANBEEZLE!!</h1>
      {!notLoggedin &&  <Profile username={activeUserName}/>}
      {!notLoggedin && <Logout onLogout = {onLogout}/>}
      {notLoggedin && <Login attemptLogin = {attemptLogin}/>}
      <Game></Game>
    </div>
  );
}

export default App;
