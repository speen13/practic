import  {useEffect, useState} from 'react';
import axios from "axios";
import css from '../styles/styles.css.js'
import {Link} from "react-router-dom";
import './About.css'

const {Container} = css



const About = () => {





  const [galeray, setGaleray] = useState([])


  useEffect(() => {
    fetchGaleray()

  }, [])
  async function fetchGaleray() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setGaleray(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  console.log(galeray)

  return (


    <Container>

      {galeray.map((item) => (
        <Link key={item.id} to={`${item.id}`}  >
<p>{item.title}</p>
        </Link>
      ))}

    </Container>
  );
};

export default About;
