import styled from "styled-components";

const css = {

  // Header: styled.header `
  // display: flex;
  //     border-radius: 10px;
  //
  //     position: fixed;
  //     top: 0;
  //     width: 100%;
  //     height: 100px;
  //     border: 1px solid black;
  //
  //
  // `,




  Container: styled.div `
  display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      width: 98vw;
      background-color: silver;
      color: white;
      font-size: 20px;
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      text-align: center;
      padding: 10px;
      margin-top: 130px;
      border-radius: 10px;
      box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      cursor: pointer;
      margin-bottom: 180px;
      


      :hover {
          transition: all 0.5s ease-in-out;
          background-color: lightblue;
          color: white;
          border: 1px solid black;
          border-radius: 10px;
          box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.5);
      }
      
  `,
  Table: styled.div `
  width: 400px;
      height: 200px;
      border: 1px solid black;
      border-radius: 10px;
      margin-bottom: 10px;
      color: black;
      background-color: bisque;
      animation: anime 1s ease;

      @keyframes anime {
          0% {
              opacity:0;
          }
          50% {
              opacity:30%;
          }
          100% {
              opacity:80%;
          }
      }
      
      
      
  `,





}

export default css;