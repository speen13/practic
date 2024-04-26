import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header.jsx";
// import css from '../styles/form.css.js'


// const {Header} = css
const MainLoyaut = () => {
  return (
    <>
      {/*<Header>*/}
      {/*  jfdlwfjldjfls*/}
      {/*</Header>*/}
      <Header />
      <Outlet />
    </>
  );
};

export default MainLoyaut;
