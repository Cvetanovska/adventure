import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function SingelUser() {

    const location = useLocation().search;
    const userID = new URLSearchParams(location).get('id');
    const URLCall = `https://reqres.in/api/users/${userID}`;

    const [userData, setUserData] = useState();


    function getUserData() {
        axios.get(URLCall).then(user => {
            console.log('user',user.data.data);
            setUserData(user.data.data);
        })

    }
    useEffect(() => {
        getUserData();
        return () => {
            console.log("hallo");
        }

    }, [])

    if (!userData) return null
    return (
        <div>
            {userID}
            <img src={userData.avatar} />
            <h3>{userData.first_name}{userData.last_name}</h3>
            <p>{userData.email}</p>

        </div>
    )
}

export default SingelUser
