import React from 'react';
import {ItensHabilidades} from './ItensHabilidades'
import './CardHabilidades.css'

function CardHabilidades() {
    return (
        <div className="habilidades-container">         
            <ul>
                <ItensHabilidades texto={"Desenvolvimento front-end / back-end"} />
                <ItensHabilidades texto={"Linguagem HTML/CSS"} />
                <ItensHabilidades texto={"Graphic Design: Photoshop / CorelDraw / InDesign"} />
                <ItensHabilidades texto={"Architectural Design: AutoCAD / Revut Architecture / Sketchup"} />
            </ul>
        </div>
    )
}

export default CardHabilidades;