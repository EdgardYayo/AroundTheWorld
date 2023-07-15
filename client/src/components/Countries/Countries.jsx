import { useDispatch, useSelector } from "react-redux";
import Country from "../Country/Country";
import { getCountries, setPage } from "../../actions/index.js";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../Countries/Countries.css"
import NavBar from "../NavBar/NavBar";
import Paged from '../Paged/Paged'


function Countries () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);

    // Logica para el paginado
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesForPage, setCountriesForPage] = useState(9);
    const indexOfLastCountry = currentPage * countriesForPage
    const indexOfFirstCountry = indexOfLastCountry - countriesForPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)

    const paged = (pageNumber) =>{
      setCurrentPage(pageNumber);
    }


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])
   

    return (
        <div className="todo">
          <NavBar/>
          <Paged
          countriesForPage={countriesForPage}
          allCountries={allCountries.length}
          paged={paged}/>

          <div>
            { currentCountries && currentCountries.length ? currentCountries.map(ct => {
                return (
                    <div className="Card">
                        <Link to={'/countries/' + ct.id}>
                          <Country
                          key={ct.id}
                          name={ct.name}
                          continent={ct.continent}
                          flag={ct.flag}
                          />
                          <br/>
                        </Link>
                    </div> 
                )
            }) : null  }
          </div>
        </div>
    )
}

export default Countries;