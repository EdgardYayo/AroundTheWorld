import React from "react";
import './Paged.css';

export default function Paged({ countriesForPage, allCountries, paged}) {
    const pageNumbers = [];

    for(let i = 0; i <= Math.ceil(allCountries/countriesForPage); i++){
        pageNumbers.push(i + 1);
    }


    return (
        <nav>
            <ul className="paged">
                { pageNumbers && pageNumbers.map(number => {
                    return (
                        <a  className= "list" key= {number} onClick={() => paged(number)}>{number}</a>
                    )
                })}
            </ul>
        </nav>
    )
}