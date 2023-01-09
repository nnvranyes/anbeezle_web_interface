import Track from "./Track"

const Tracks = ({tracks}) => {

  return (
    <>
        {tracks.map((track) => (
             <Track key={track.guess} guess = {track.guess} trackname = {track.trackName} 
             albumnumber = {track.albumNumber} tracknumber = {track.trackNumber} 
             tracklength = {track.trackLength} guessColor = {track.guessColor} 
             trackNameColor = {track.trackNameColor} albumNumberColor = {track.albumNumberColor} 
             trackNumberColor = {track.trackNumberColor} trackLengthColor = {track.trackLengthColor}/>
            ) 
        )}  
    </>
  )
}

export default Tracks
