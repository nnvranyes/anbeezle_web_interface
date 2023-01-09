import { useState } from "react"

 
const Track = ({guess,trackname,albumnumber,tracknumber,tracklength,
  guessColor,trackNameColor,albumNumberColor,trackNumberColor,trackLengthColor, 
  albumUpOrDown, trackNumberUpOrDown, trackLengthUpOrDown}) => {
  
  return (
    <div className='row-container'>
        <div className='box' style = {{backgroundColor: guessColor}} >{guess}</div>
        <div className='box' style = {{backgroundColor: trackNameColor}} >{trackname}</div>
        <div className='box' style = {{backgroundColor: albumNumberColor}} >{albumnumber} {albumUpOrDown}</div>
        <div className='box' style = {{backgroundColor: trackNumberColor}} >{tracknumber} {trackNumberUpOrDown}</div>
        <div className='box' style = {{backgroundColor: trackLengthColor}} >{tracklength} {trackLengthUpOrDown}</div>
    </div>
  )
}

export default Track
