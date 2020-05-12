import React from 'react';
import './CardHabilidades.css'

function CardHabilidades(props) {
    return (
        <div className="habilidades-container">         
            <ul>
            <li> {props.texto[0]} </li>
            <li> {props.texto[1]} </li>
            <li> {props.texto[2]} </li>
            <li> {props.texto[3]} </li>
            </ul>
        </div>
    )
}

export default CardHabilidades;