import Button from "./Button"
import { useState } from "react"

const Login = ({attemptLogin}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username || !password){
            alert('Please input Username & Password')
            return
        }
        
        console.log(username, password)
        attemptLogin(username, password)

        setUsername('')
        setPassword('')


    }

  return (
    <form onSubmit = {onSubmit}>
        <h1 className='header' >Login</h1>
      <div className='form-control'>
          <label>Username</label>
          <input type = 'text' value = {username} placeholder='Enter Username' onChange={(e)=>setUsername(e.target.value)}/>
      </div>

      <div className='form-control'>
          <label>Password</label>
          <input type = 'text' value = {password} placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
      </div>

      <input type='submit' value='Login' className = 'btn'/>
    </form>
  )
}

export default Login
