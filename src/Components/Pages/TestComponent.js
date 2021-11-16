import React,{useState,useEffect} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';



function TestComponent() {
 
    
    const [name,setName] = useState({name:"",job:""});
    const URL = 'https://reqres.in/api/users'
    const history = useHistory()
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
        console.log(history)
        history.push('/blog')
    })
        .catch(error =>alert(error))
        
    }
    
    return (
        
        <div className="wrapper">
          
            <div className="form-wrapper">
            <div className="form">
                <h1>Form</h1>
              
       <form onSubmit={submitName}>
        
           <div className="firstName">
           <input value={name.name} onChange={evt => setName({...name,name: evt.target.value})} type="text" placeholder=" First name" />
           </div>
           <div className="lastName">
           <input value={name.job} onChange={evt => setName({...name,job: evt.target.value})} type="text" placeholder="Job" />
           </div>
           
           <input className="kopce" type="submit" value="Send"/>
       </form>
         </div>
         </div>
       </div>
       
    )
}

export default TestComponent