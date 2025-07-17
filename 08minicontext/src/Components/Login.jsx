import React, { useState , useContext, use } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setuser({username,password})
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
        type="text"
        value={username}
        placeholder='username'
        onChange={(e) => setusername(e.target.value)}        
        />
        {""}
        <input 
        type="password" 
        onChange={(e) => setpassword(e.target.value)}
        placeholder='password'
        value={password}
        />
        <button
        onClick={handleSubmit}
        >
            submit
        </button>
    </div>
  )
}

export default Login