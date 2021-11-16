import React,{useEffect,useState} from 'react';
import{useLocation} from 'react-router-dom'
import axios from 'axios';
import PhotosBox from './PhotosBox';

function PhotosUser() {

    const location = useLocation().search;
    const userID = new URLSearchParams(location).get('id');
    const URLCall = `https://reqres.in/api/users/${userID}`

    const[userName,setUserName] = useState();


    function getUserName(){
        axios.get(URLCall).then( user => {
            console.log('user',user.data.data);
            setUserName(user.data.data);
        })
        
    }
    useEffect(() => {
         getUserName();
         return() =>{
             console.log("hallo");
         }
             
    }, [])

      if(!userName) return null
    return (
        <div>
             {userID}
             <img src={userName.avatar}/>
             <h3>{userName.first_name}{userName.last_name}</h3>
             <p>{userName.email}</p>
           
        </div>
    )
}

export default PhotosUser
