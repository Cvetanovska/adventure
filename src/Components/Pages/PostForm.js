import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './PostForm.css';

function PostForm() {

    const [name,setName] = useState({id:"",title:"",body:""});
    const URL = 'https://jsonplaceholder.typicode.com/posts'
    const token = '3515642356846'

    function submitName(event) {
        event.preventDefault();
        axios.post(URL, name, {
            headers:{
                'Autorization':'Violeta $' 
            }
        })
        .then((res) => {
        console.log(res)
        
    })
        .catch(error =>alert(error))
        
    }
    
    return (
              
       <form onSubmit={submitName}>
        
           <div>
           <input value={name.id} onChange={evt => setName({...name,id: evt.target.value})} type="text" placeholder="" />
           </div>
           <div>
           <input value={name.title} onChange={evt => setName({...name,title: evt.target.value})} type="text" placeholder="" />
           </div>
           <div>
           <input value={name.body} onChange={evt => setName({...name,body: evt.target.value})} type="text" placeholder="" />
           </div>
           <input className="kopce" type="submit" value="Send"/>
       </form>
         
         
      
       
    )
}

export default PostForm
