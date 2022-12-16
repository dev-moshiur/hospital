import React from 'react'

import './navBar.scss'


import { AccountCircle, Search } from '@material-ui/icons'

export default function NavBar({setsearch}) {
  return (
    <div className='navBar'>
        <div className="links">
            <a href='#home'>Home </a>
            <a href=''>Features</a>
            <a href='#services'>Services</a>
            <a href='#team'>Team</a>
            <a href='#blog'>Blog</a>
            <a href=''>Pages</a>

        </div>
        <div className="icons">
            <span onClick={()=>setsearch((presearch)=>!presearch)}><Search/></span>
            <span><AccountCircle/></span>
            

        </div>
    </div>
  )
}
