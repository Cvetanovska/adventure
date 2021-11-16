import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Users.css';
import UserBox from './UserBox';

    

function Users() {
    const [users,setUsers] = useState ([]);
  
    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2').then(
            (response) =>{
                setUsers(response.data.data)
            }
        )
    },[])

    return (
        <div className="users-container">
           
            <div className="users-menu">
          
            {
                users && users.map((userMap) => {
                    return (
                        <UserBox data ={userMap} key={userMap.id} />
                    )
                })
            }
            </div>
        </div>
                

    )
}

export default Users
