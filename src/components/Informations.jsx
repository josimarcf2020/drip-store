import React from 'react';
import "../styles/Informations.css"


export const Informations = ({ title, informations }) => {
    return (
        <>
            <div className="informationsTitle">
                <strong>{title}</strong>
            </div>
            <div className="informations">
                {informations.map((info) => (
                    <a href={info.link} key={info.link}><p>{info.text}</p></a>
                ))}
            </div>
        </>
    )
}