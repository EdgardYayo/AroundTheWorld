import React, { useEffect } from "react";
import './NavBar.css';
import { filterByContinent, frontOrder, searchCountry } from "../../actions";
import { useDispatch } from "react-redux";


export default function NavBar(props){

const dispatch = useDispatch()

function handleFilterContinent(e){
 dispatch(filterByContinent(e.target.value))
}

function handleSearchByName(e){
    dispatch(searchCountry(e.target.value));
}

function handleAlphaOrder(e){
    dispatch(frontOrder(e.target.value))
}

    return(
        <>
        <div className="Principal">
            <input 
                className="sec" 
                type="text" 
                placeholder="Busca por Nombre"
                onChange={(e) => handleSearchByName(e)}/>
            <select className="sec" onChange={(e) => handleAlphaOrder(e)}>
                <option value={'pAsc'}>Less Population</option>
                <option value={'pDesc'}>More Population</option>
            </select>
            <select className="sec" onChange={(e) => handleAlphaOrder(e)}>
                <option value={'A-Z'}>A-Z</option>
                <option value={'Z-A'}>Z-A</option>
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