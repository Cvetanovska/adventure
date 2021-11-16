import React from 'react';
import {Link} from 'react-router-dom';

function UserBox(userMap) {
    console.log(userMap)
    return (
        <>
         <Link to={'./singleUser?id='+ userMap.data.id}>
            <img src={userMap.data.avatar}/>
            <h2>{userMap.data.first_name}{userMap.data.last_name}</h2>
            <small>{userMap.data.small}</small>
            </Link>
        </>
    )
}

export default UserBox
