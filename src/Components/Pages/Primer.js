import React, { Component, useState } from 'react';
import './Contact.css';


function Primer() {

    const [name, setName] = useState({ name: "violeta",  lastName:"Cvetanovska",email:"viki",passwort:"123" })

    function submitName(event) {
        event.preventDefault();
        console.log(name);
    }


    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Contact</h1>
                <form onSubmit={submitName}>
                    <div className="firstName">

                        <input type="text"
                            value={name.name}
                            onChange={evt => setName({ ...name, name: evt.target.value })}
                            className=""
                            placeholder="First Name"
                            type="text" name="firstName"

                        />
                    </div>
                    <div className="lastName">

                        <input type="text"
                        value={name.lastname}
                        onChange={evt => setName({ ...name,lastname: evt.target.value })}
                            className=""
                            placeholder="Last Name"
                            type="text" name="lastName"

                        />
                    </div>
                    <div className="email">

                        <input type="text"
                        value={name.email}
                        onChange={evt => setName({ ...name,email: evt.target.value })}
                            className=""
                            placeholder="email"
                            type="text" name="email"

                        />
                    </div>
                    <div className="password">

                        <input type="text"
                        value={name.passwort}
                        onChange={evt => setName({ ...name, passwort: evt.target.value })}
                            className=""
                            placeholder="Password"
                            type="text" name="password"

                        />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Primer
