import { use, useState , useCallback ,useEffect ,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [CharactersAllowed , SetCharacterAllowed] = useState(false)
  const [password , SetPassword] = useState('')

  const passwordref = useRef(null)

  const generatePassword = useCallback (() => {
    let pass = "";
    let str = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+= "01234566789"
    }
    if(CharactersAllowed){ str += "!@#$%^&*()_+"}

    for (let i = 1; i<=length ; i++){
        const char = Math.floor(Math.random() * str.length) 
       pass += str.charAt(char);
;
    }

    SetPassword(pass)
  } , [length , numberAllowed , CharactersAllowed])

  useEffect(() => {
    generatePassword();
  } , [length,numberAllowed,CharactersAllowed])

  const CopyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordref.current?.select()
  }

  return (
    <>
     <div className="flex items-center justify-center w-full h-screen bg-gray-800">
        <div className="max-w-md w-full px-6 py-4 rounded-lg shadow-xl bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 text-white text-center">
    <h1 className="text-xl font-bold mb-4"> Password Generator</h1>
    
    <div className="flex shadow-inner rounded-xl overflow-hidden bg-white text-black">
      <input 
        type="text"
        value={password}
        className="outline-none w-full py-2 px-4 text-lg"
        placeholder="Your generated password"
        readOnly
        ref={passwordref}
      />
      <button 
        onClick={CopyPasswordToClipboard}
        className="bg-purple-600 text-white px-4 hover:bg-purple-700 duration-200 cursor-pointer"
      >
        Copy
      </button>
    </div>
    <div className='flex test-sm gap-x-2'>
      <div className='flex mt-5  '>
        <input 
        type="range" 
        name=''
        id=''
        min= {8}
        max = {100}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className='cursor-pointer'
        />
        <label htmlFor="length">Length : {length}</label>
      </div>
       <div className='flex mt-5  '>
        <input 
        type="checkbox" 
        name="" 
        id="" 
        defaultChecked = {numberAllowed}
        onChange={() => { setNumberAllowed((prev) => !prev) }}
        className='cursor-pointer'
        />
        <label htmlFor="number">Numbers</label>
      </div>
      <div className='flex mt-5  '>
        <input 
        type="checkbox" 
        name="" 
        id="" 
        defaultChecked = {CharactersAllowed}
        onChange={() => { SetCharacterAllowed((prev) => !prev) }}
        className='cursor-pointer'
        />
        <label htmlFor="Characters">Charaacters</label>
      </div>
    </div>
  </div>
</div>

      

    </>
  )
}

export default App
