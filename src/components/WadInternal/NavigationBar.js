import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavigationBar.css'

function NavigationBar() {
  return (
    <div>
        <ul className='nav justify-content-end bg-info p-3 '>
            <li className='nav-item px-3 fs-4'>
                <NavLink to='' >Home</NavLink>
            </li>
            <li className='nav-item px-3 fs-4'>
                <NavLink to='/signin' >SignIn</NavLink>
            </li>
            <li className='nav-item px-3 fs-4'>
                <NavLink to='/signup' >SignUp</NavLink>
            </li>
        
        </ul>
    </div>
  )
}

export default NavigationBar