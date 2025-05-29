import React from 'react';
import "../styles/Informations.css"


export const Informations = ({ title, informations }) => {
    return (
        <>
            <div className="informationsTitle">
                <strong>{title}</strong>
            </div>
            <ul className="informations-list"> {/* Usar uma lista para semântica */}
                {informations.map((info) => (
                    <li key={info.link}><a href={info.link} className="information-link">{info.text}</a></li>
                ))}
            </ul>
        </>
    )
}