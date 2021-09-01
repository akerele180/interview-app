import React from 'react'
import { RiSearchLine } from "react-icons/ri";

function Header2() {
    return (
        <header className='mt-5 pt-2'> 
            <div className='d-flex align-items-center justify-content-between'>
                <h1 className='display-6 m-0 p-0 fw-light'>Discover</h1>
                <RiSearchLine className='search'/>
            </div>
        </header>
    )
}

export default Header2
