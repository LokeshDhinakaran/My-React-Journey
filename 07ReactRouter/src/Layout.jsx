import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header />
    < Outlet />
    <Footer />

    </>
  )
}

export default Layout