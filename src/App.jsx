
import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import css from "./styles/styles.css.js";
import MainLoyaut from "./layouts/MainLoyaut.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";


const {Container, Table} = css
function App() {

  const [recepts, setRecepts] = useState([])

  useEffect(() => {
    fetchRecepts()

  }, [])
  async function fetchRecepts() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setRecepts(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }
  console.log(recepts)
  return (
    <>
      <BrowserRouter>
        <MainLoyaut />
        <Routes>

          <Route path='/' element={<Container >
            {recepts.map(el =>

              <Table key={el.id}>
                <h3>{el.name}</h3>
                <h2>{el.username}</h2>
              </Table>
            )}
          </Container>} />
          <Route path='about' element={<About />} />
          <Route path='contacts' element={<Contacts />} />
          <Route path='about/:id' element={<Info />} />

        </Routes>
<Footer />
      </BrowserRouter>




    </>
  )
}

export default App
