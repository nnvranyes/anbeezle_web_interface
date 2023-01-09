import { useState } from "react"
import Track from "./Track"
import Tracks from "./Tracks"


const Game = () => {

  const [guess, setGuess] = useState('')
  const [answer, setAnswer] = useState({
    tracknumber: '4',
    trackname: 'Symphony Of Blase',
    albumnumber: '2',
    tracklength: '4:24'
  })
  const [tracks,setTracks] = useState([])

  const onSubmit = async (e) =>{
    e.preventDefault()
    const res = await fetch(`http://localhost:8080/api/v1/track/${guess}`)
    const data = await res.json()

    setGuess('')
    data.guess= 3
    console.log(data)

    setTracks([...tracks,data])
  
  }

  return (
    <div>
        <form onSubmit = {onSubmit}>      
            <div className='form-control'>
                <label>Guess</label>
                <input type = 'text' value = {guess} placeholder='Enter Guess' onChange={(e)=>setGuess(e.target.value)}/>
            </div>
            <input type='submit' value='Enter' className = 'btn'/>
        </form>

      <div className='game-container'>
        <Track guess = {'guess'} trackname = {'trackname'} 
        albumnumber = {'albumnumber'} tracknumber = {'tracknumber'} 
        tracklength = {'tracklength'} guessColor = {'white'} 
        trackNameColor = {'white'} albumNumberColor = {'white'} 
        trackNumberColor = {'white'} trackLengthColor = {'white'} 
        albumUpOrDown = {''} trackNumberUpOrDown = {''} trackLengthUpOrDown = {''}/>
        <Tracks tracks={tracks}/>
      </div>

    
    </div>
  )
}

export default Game
