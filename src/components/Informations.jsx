import React from "react";
import "../styles/Informations.css"


export const Informations = ({ title, informations }) => {
    return (
        <>
            <div className="informationsTitle">
                <strong>{title}</strong>
            </div>
            <div className="informations">
                {informations.map((info, index) => (
                    <a href="{info.link}"><p key={index}>{info.text}</p></a>
                ))}
            </div>
        </>
    )
}