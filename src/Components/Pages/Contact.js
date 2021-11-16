import React, {useState} from 'react';
import './Contact.css';
import Logo1 from './Logo1';

function Form(){
    return(
        <Logo1/>
    )
}


function Contact() {
 
    
    const [name,setName] = useState({name:"",lastName:"",email:"",password:""});

    function submitName(event) {
        event.preventDefault();
        console.log(name);
        
    }
    
    return (
        
        <div className="wrapper">
            <Logo1/>
            <div className="form-wrapper">
            <div className="form">
                <h1>Contact</h1>
              
       <form onSubmit={submitName}>
        
           <div className="firstName">
           <input value={name.name} onChange={evt => setName({...name,name: evt.target.value})} type="text" placeholder=" First name" />
           </div>
           <div className="lastName">
           <input value={name.lastName} onChange={evt => setName({...name,lastName: evt.target.value})} type="text" placeholder="Last name" />
           </div>
           <div className="email">
           <input value={name.email} onChange={evt => setName({...name,email: evt.target.value})} type="text" placeholder="email"/>
           </div>
           <div className="password">
           <input value={name.password} onChange={evt => setName({...name,password: evt.target.value})} type="text" placeholder="password"/>
           </div>
           <input className="kopce" type="submit" value="Send"/>
       </form>
         </div>
         </div>
       </div>
       
    )
}
export default Contact
