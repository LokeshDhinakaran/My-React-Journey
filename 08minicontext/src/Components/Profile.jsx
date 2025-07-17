import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged in</h1>
  return (
    <div>Profile : {user.username} {user.password} </div>
  )
}

export default Profile