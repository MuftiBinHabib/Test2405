import React from 'react'
import { Link, Outlet } from 'react-router'

const Header = () => {
  return (
    <div className="container">
        <ul className='flex gap-5'>
            <li><Link to='map'>Map</Link></li>
            <li><Link to='3d'>3D Cube</Link></li>
            <li><Link to='pt'>Practice </Link></li>
            <li><Link to='games'>Games</Link></li>
            
        </ul>

        <Outlet />
    </div>

    
  )
}

export default Header