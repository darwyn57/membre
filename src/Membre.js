import React from 'react';
import './App.js'


const Membre = (props) => {
    const name = props.name;

    return (
        <h2>Membre de ma famille : {name.toUpperCase()}</h2>
    )
}

export default Membre
