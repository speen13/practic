import React from 'react';
import   './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className={'header'}>
<Link className='link' to='/about'>About</Link>
      <Link className='link'  to='/contacts'>Contacts</Link>
      <Link className='link'  to='/'>Home</Link>


    </div>
  );
};

export default Header;
