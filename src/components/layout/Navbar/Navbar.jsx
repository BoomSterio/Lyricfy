import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { DispatchContext } from '../../../context'
import { getTopTracks } from '../../../thunks/thunks'

const Navbar = () => {
  const dispatch = useContext(DispatchContext)
  const history = useHistory()

  const handleClick = () => {
    history.push('/')
    getTopTracks(dispatch)
  }

  return (
    <nav className={'navbar navbar-dark bg-dark mb-5 sticky-top'}>
      <div onClick={handleClick} style={{color:'lightgreen', cursor: 'pointer'}} className="navbar-brand md-0 h1 mx-auto">Lyricfy</div>
    </nav>
  )
}

export default Navbar
