import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={'navbar navbar-dark bg-dark mb-5 sticky-top'}>
      <Link to={'/'} style={{color:'lightgreen'}} className="navbar-brand md-0 h1 mx-auto">Lyricfy</Link>
    </nav>
  )
}

export default Navbar
