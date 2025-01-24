import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUserCred} = useContext(UserContext)
    // where does setUser come from ?
    // In the UserContextProvider we have [<UserContext.Provider value={{user, setUser}} >]
    // we gave access to user and setUser.. the setUser set's the "user" value

    function handleSubmit(e){
        e.preventDefault() 
        /*
        Why use .preventDefault? When you submit a form in a typical HTML form, the default behavior is for the page to refresh (reload) in order to process the form data, which is not what we want in a modern React application.
        */

        setUserCred({username, password}) 
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login