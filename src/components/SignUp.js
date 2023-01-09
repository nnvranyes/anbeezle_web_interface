
const SignUp = () => {
  return (
    <form className='add-form'>
        <h1 className='header' >Login</h1>
      <div className='form-control'>
          <label>Username</label>
          <input type = 'text'></input>
      </div>
      <div className='form-control'>
          <label>Password</label>
          <input type = 'text'></input>
      </div>
      <div className='form-control'>
          <label>Re-Enter Password</label>
          <input type = 'text'></input>
      </div>
    </form>
  )
}

export default SignUp
