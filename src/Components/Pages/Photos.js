import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PhotosBox from './PhotosBox';


function Photos() {
    const [users,setUsers] = useState ([]);
    
  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10').then(
            (response) =>{
             setUsers(response.data)
             console.log(response.data)
             
            }
        )
    },[])

    return (
        <div className="users-container">
           
            <div className="users-menu">
          
            {
                users && users.map((userMap) => {
                    return (
                        <PhotosBox data ={userMap} key={userMap.id} />
                    )
                })
            }
            </div>
        </div>
                

    )
}
   
export default Photos
