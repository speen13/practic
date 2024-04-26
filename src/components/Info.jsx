import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import './Info.css'

const Info = () => {
 const {id} = useParams()

  const [post, setPost] = useState([]);



  useEffect(() => {
    fetchPost()

  }, [])
  async function fetchPost() {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      setPost(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }

console.log(post)
  return (

    <div className='info' >
      <h1>{post.title}</h1>
     <h2> {post.body}</h2>
    </div>
  );
};

export default Info;
