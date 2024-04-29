import React, {useState} from 'react';
import   './Header.css'
import {Link} from "react-router-dom";
import Menu from "./Menu.jsx";

const Header = () => {

  const [iks, setIks] = useState(true)

  const handleClick = () => {
    setIks((e) => !e)
  }


  return (
    <div className={'header'}>
      <h1 className={'logo'}>Step by Step</h1>
      <Link className='link' to='/about'>About</Link>
      <Link className='link' to='/contacts'>Contacts</Link>
      <Link className='link' to='/'>Home</Link>

      <div className={'burger'} onClick={handleClick}>
        <span className={iks ? '' : 'line'}></span>
        <span className={iks ? '' : 'line_2'}></span>
        <span className={iks ? '' : 'line_3'}></span>
      </div>
      <Menu iks={iks} setIks={setIks}/>
    </div>
  );
};

export default Header;
