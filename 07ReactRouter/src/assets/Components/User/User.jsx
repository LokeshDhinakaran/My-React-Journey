import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-orange-600 text-black text-3xl py-5 text-center '>User :{userid}</div>
  )
}

export default User