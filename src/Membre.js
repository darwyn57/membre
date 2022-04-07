import React, { Component, Fragment } from 'react';
import './App.js'



const Membre = ({ name, children, age, cacherNom }) => {

    return (
        <fragment>
            <h2 style={{ backgroundColor: age < 26 ? '#7E5920' : '#FFC15E', color: age < 26 ? '#22333B' : '#5E503F' }}>Membre de ma famille : {name.toUpperCase()} : {age} </h2>
            <button onClick={cacherNom}>X</button>
            {children ? <p>description: {children}</p> : <Fragment />}

        </fragment>
    )
}

export default Membre
