import './Navbar.css'
import {Link} from 'react-router-dom';

import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className="brand">
                <h1>Indian Recipes</h1>
            </Link>
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
