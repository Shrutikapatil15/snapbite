import React from 'react'
import './MobileApp.css'
import { assets } from '../../assets/assets'

const MobileApp = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better experience Download <br/> SnapBite App</p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt='playstore'/>
            <img src={assets.app_store} alt='appstore'/>
        </div>
    </div>
  )
}

export default MobileApp