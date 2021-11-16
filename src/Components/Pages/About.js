import React, { useState } from 'react';
import './About.css'


function About({ title, content }) {

    const [greeting, setGreeting] = useState("name")
    const [age, setAge] = useState("age")
    const [theme, setTheme] = useState("blue")


    function helloFunction() {
        setGreeting("Viki");
    };
    function changeAge() {
        setAge("37");
    };
    function changeTheme() {
        setTheme("dark");
    };

    return (
        <ul className="aboutItem">

            <li className="aboutList">
                <h1>{greeting}</h1>
                <button className="btn-1" onClick={helloFunction}>Click me</button></li>

            <li className="aboutList">
                <h1>{age}</h1>
                <button className="btn-1" onClick={changeAge}>Click me</button></li>

           <li className="aboutList">  
                <h1>{theme}</h1>
                <button className="btn-1" onClick={changeTheme}>Click me</button></li>

        </ul>
    )
}

export default About
