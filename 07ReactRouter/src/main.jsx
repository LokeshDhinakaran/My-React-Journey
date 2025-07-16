import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './assets/Components/Home/Home.jsx'
import About from './assets/Components/About/About.jsx'
import Contact from './assets/Components/Contact/Contact.jsx'
import User from './assets/Components/User/User.jsx'
import Github , {githubinfoLoader} from './assets/Components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element= {<Home />} />
      <Route path='about' element= {<About />} />
      <Route path='contact' element = {<Contact />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={< User />} />
      </Route >
      <Route 
      loader = {githubinfoLoader}
      path='github' 
      element={< Github/>} />
      <Route path='*' element = {<div> Not found</div>} />
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
