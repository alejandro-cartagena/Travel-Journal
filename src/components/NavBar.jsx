import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <div>
        <header className='nav-header'>
            <FontAwesomeIcon className='earth-icon' icon={faEarthAmericas} />
            <p>my travel journal</p>
        </header>
    </div>
  )
}

export default NavBar