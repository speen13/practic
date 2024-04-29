import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";



// const {Header} = css
const MainLoyaut = () => {
  return (
    <>

      <Header />
      {/*<Menu />*/}
      <Outlet />

    </>
  );
};

export default MainLoyaut;
