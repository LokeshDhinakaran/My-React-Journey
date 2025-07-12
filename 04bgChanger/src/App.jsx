import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')
  
  //function changeColor(color){
    //setColor(color);
  //}
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-3xl text-black shadow-lg cursor-pointer bg-red-500'>red</button>
          <button onClick = {() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer bg-blue-500'>blue</button>
          <button onClick = {() => setColor('black')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer bg-black'>black</button>
          <button onClick = {() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer bg-green-400'>Green</button>
          <button onClick = {() => setColor('purple')} className='outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer bg-purple-500'>Purple</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
