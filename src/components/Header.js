import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import './Header.css'

function Header() {
  return (
    <header className='mt-5 pt-2'> 
      <div className='d-flex align-items-center'>
        <BsArrowLeft className='arrow'/>
        <h1 className='display-6 m-0 px-3 fw-light'>Browse</h1>
      </div>
    </header>
  );
}

export default Header;
