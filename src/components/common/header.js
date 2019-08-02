import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  console.log('this in header.js')
  return(
    <section className="header">
      <div className="headerContainer">
        <h1>indiana hames</h1>
        <nav>
          <Link to="/">home</Link>
          <Link to ="/brazil">brazil</Link>
          <Link to ="/bolivia">bolivia</Link>
        </nav>        
      </div>
    </section>
  )
}

export default Header
