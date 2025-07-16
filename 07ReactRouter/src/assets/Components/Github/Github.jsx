import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

    // const [data , setdata] = React.useState([]);
    // useEffect(() =>{
    //     fetch('https://api.github.com/users/lokeshdhinakaran')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)
    //     })
    // }, [])

  return (
    <div className='text-center bg-gray-600 m-4 p-4 text-orange-400 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const githubinfoLoader = async() =>{
    const res = await fetch('https://api.github.com/users/lokeshdhinakaran')
    return res.json()
}