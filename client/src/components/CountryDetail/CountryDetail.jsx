import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountryDetail } from "../../actions";
import "./CountryDetail.css"

export default function CountryDetail (props) {
  const { id } = props;
  console.log(id)

    const dispatch = useDispatch();
    const countryArray = useSelector((state) => state.selectedCountry);
    const country = countryArray[0]
    console.log(country)

    useEffect(() => {
      dispatch(getCountryDetail(id));
    },[dispatch, id])

    return (
      <div>
        <h1 className="title-det">{country?.name}</h1>
        <div className="cont-detail">
          <div className="subcont-det">
            <img src={country?.flag}/>
          </div>
         <div>
            <h3>{country?.id}</h3>
            <p><strong>Capital: </strong>{country?.capital}</p>
            <p><strong>Subregion: </strong>{country?.subregion}</p>
            <p><strong>Continent: </strong>{country?.continent}</p>
            <p><strong>Area: </strong>{country?.area} km<sup>2</sup></p>
            <p><strong>Population: </strong>{country?.population}</p>
         </div>
        </div>
      </div>
    )
}