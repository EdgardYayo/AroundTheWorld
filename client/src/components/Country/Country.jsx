import React from "react"
import "../Country/Country.css"

// Componente que renderiza cada country individualmente
export default function Country ({name, flag, continent} ){
    return (
        <div className="General">
            <div className="Card">
                <h3>{ name ? name : "Country Name" }</h3>
                <img className="Pais" src={flag} alt="flag not found" width="100px" height="100px"/>
                <h4>{ continent ? continent : "Continent"}</h4>
            </div>
        </div>
    )
}