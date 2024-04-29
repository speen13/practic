import React from 'react';
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = ({iks, setIks}) => {
const clicks = () => {
  setIks((e) => !e)
}
  return (
    <div className={!iks ? 'menu' : 'menu_1'}>
      <Link className={'links'} onClick={clicks}  to='/about'>About</Link>
      <Link className={'links_1'} onClick={clicks}  to='/contacts'>Contacts</Link>
      <Link className={'links_2'} onClick={clicks}  to='/'>Home</Link>
    </div>
  );
};

export default Menu;
