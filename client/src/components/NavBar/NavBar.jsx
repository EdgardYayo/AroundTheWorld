import React, { useEffect } from "react";
import './NavBar.css';
import { filterByContinent } from "../../actions";
import { useDispatch } from "react-redux";


export default function NavBar(props){
const dispatch = useDispatch()
function handleFilterContinent(e){
 dispatch(filterByContinent(e.target.value))
}
    return(
        <>
        <div className="Principal">
            <input className= "sec" type="text" placeholder="Busca por Nombre"/>
            <select className="sec"name="" id="">
                <option value>Less Population</option>
                <option>More Population</option>
            </select>
            <select className="sec" name="" id="">
                <option>A-Z</option>
                <option>Z-A</option>
            </select>
            <select onChange={(e) => handleFilterContinent(e)} className="sec">
                <option value="All">All</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
            </select>
        </div>
        </>
    )
}