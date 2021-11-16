import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Services.css';
import UseeffectItem from './UseeffectItem';


function Useeffect({props}) {
    
    const [title, setTitile] = useState('');
    const [text,setText] = useState('');

    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            (response) =>{
               console.log(response);
            }
        )
    },[])

     return(
        <div className="useeffect-menu">
            <div className="useeffectlist">
               
               <UseeffectItem />
               <UseeffectItem />
               <UseeffectItem />
              
            </div>
        </div>
     ) 
            
     

     };
    

export default Useeffect


