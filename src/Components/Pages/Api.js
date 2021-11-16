import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Api() {

    const [blogs, setBlogs] = useState([])


   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts/1').then(
           (response) => {
           setBlogs(response.data)    
           console.log('blogs',blogs);
           
       }
       
       )
   }, [])

       if (!blogs) return null;

   // return () => console.log('unmounting...');
//}, []);



  return (
        <div>
          <h1>{blogs.title}</h1>
        </div>
    )
}

export default Api
