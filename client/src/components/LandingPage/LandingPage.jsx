import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getActivities, getCountries } from '../../actions';
import './LandingPage.css';


export function LandingPage ( props ){
    const { getActivities, getCountries } = props;

    useEffect(() => {
    getActivities();
    getCountries();
    },[])

    return (

        <div className='Landing-Principal'>
            <span>WELCOME TO COUNTRIES APP</span>
            <br/>
            <br/>
            <Link to='/home'>
              <p className='Imagen'>&#9992;H🌍ME&#9992;</p>
            </Link>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        getActivities: () => dispatch(getActivities()),
        getCountries: () => dispatch(getCountries())
    }
}

export default connect(null, mapDispatchToProps)(LandingPage);