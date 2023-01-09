import Button from "./Button"

const Logout = ({onLogout}) => {

    const outLog = () =>{
        console.log("Logout function")
        onLogout()
    }

  return (
      <Button text='Logout' onClick={outLog}/>
  )
}

export default Logout
