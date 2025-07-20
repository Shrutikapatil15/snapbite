import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

// and experience ultimate food wisdom

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>The One-stop platform to satisfy all your food cravings </h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. </p>
            <Link to='/Menu'><button >Order Now</button></Link>
        </div>
    </div>
  )
}

export default Header