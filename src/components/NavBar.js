import React from 'react'
import './NavBar.css'
import {HiHome, HiViewGrid} from 'react-icons/hi'
import {RiBookmark2Fill} from 'react-icons/ri'
import {TiVideo} from 'react-icons/ti'

function NavBar() {
    return (
        <nav>
            <ul className='p-3 m-0'>
                <li>
                    <HiHome className='icorn'/>
                    <span className='pt-2'>Discover</span>
                </li>
                <li>
                    <TiVideo className='icorn'/>
                    <span className='pt-2'>Browse</span>
                </li>
                <li>
                    <RiBookmark2Fill className='icorn'/>
                    <span className='pt-2'>Bookmark</span>
                </li>
                <li>
                    <HiViewGrid className='icorn'/>
                    <span className='pt-2'>More</span>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
