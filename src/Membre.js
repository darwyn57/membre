import React, { Component, Fragment } from 'react';
import './App.js'



const Membre = ({ name, children, age }) => {

    return (
        <fragment>
            <h2>Membre de ma famille : {name.toUpperCase()} : {age} </h2>
            {children ? <p>description: {children}</p> : <Fragment />}
        </fragment>
    )
}

export default Membre
