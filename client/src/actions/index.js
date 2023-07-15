import axios from 'axios';
const ACTIVITY_URL = "http://localhost:3001/activity"
const COUNTRIES_URL = "http://localhost:3001/countries"

export const getCountries = () => {
    return function ( dispatch ){
        return axios.get(`${COUNTRIES_URL}`)
        .then(result => dispatch({
            type: 'GET_COUNTRIES',
            payload: result.data
        }))
    }
}

export const getActivities = () => {
    return function ( dispatch ){
        return axios.get(`${ACTIVITY_URL}`)
        .then( result => dispatch({
            type: 'GET_ACTIVITIES',
            payload: result.data
        }))
    }
}

export const getCountryDetail = (id) => {
    return async function ( dispatch ){
        const json = await axios.get(`${COUNTRIES_URL}/${id}`)
        console.log(json.data, "aqui")
        return  dispatch({
            type:'GET_COUNTRY_DETAIL',
            payload: json.data
        })
    }
}

export const filterByContinent = (payload) => {
    return {
        type:"FILTER_BY_CONTINENT",
        payload
    }
}

export const clearCountryDetail = () => {
    return function ( dispatch ){
        dispatch({
            type:'CLEAR_COUNTRY_DETAIL',
            payload: { flag : 'https://cdn.dribbble.com/users/1028385/screenshots/2952329/tgif_030.gif',
                activities: [] }
        })
    }
}

export const clearResultCountries = () => {
    return function ( dispatch ){
        dispatch({
            type:'CLEAR_RESULT_COUNTRIES',
            payload: []
        })
    }
}

export const searchCountry = (name) => {
    return function ( dispatch ){
        return axios.get(`${COUNTRIES_URL}/name?name=${name}`)
        .then( result => {
            if(Array.isArray(result.data)) dispatch({
                type:'SEARCH_COUNTRY',
                payload: result.data
         });
            else {
                alert(result.data.message);
                dispatch({
                    type:'SEARCH_COUNTRY',
                    payload: []
                })

            }
      })
    }
}

export const addActivity = (activity) => {
    return function ( dispatch ){
        return axios.post(ACTIVITY_URL, activity)
        .then( result => {
            alert(result.data.message);
            dispatch({
                type:'ADD_ACTIVITY',
                payload: activity.name
            })
        })
    }

}

export const filterCountry = (activity) => {
    return function ( dispatch ){
        return axios.get(`${COUNTRIES_URL}?filter=${activity}`)
        .then( result => dispatch({
            type:'FILTER_COUNTRY',
            payload: result.data
        }))
    }
}

export const frontFilter = (continent) => {
    return function ( dispatch ){
      dispatch({
        type:'FRONT_FILTER',
        payload:continent
      })
    }
}

export const frontOrder = (parameters) => {
    switch(parameters){
      case 'A-Z':
        return function (dispatch){
          dispatch({
            type:'FRONT_ORDER',
            payload:function (a,b){
              return a.name.localeCompare(b.name);
            }
          })
        }
      case 'Z-A':
        return function (dispatch){
          dispatch({
            type:'FRONT_ORDER',
            payload:function (a,b){
             return b.name.localeCompare(a.name);
            }}
          )}
      case 'pAsc':
        return function (dispatch){
          dispatch({
            type:'FRONT_ORDER',
            payload:function (a,b){
                if(a.population < b.population) return -1;
                if(a.population > b.population) return 1;
                return 0;}}
          )}
      case 'pDesc':
        return function (dispatch){
          dispatch({
            type:'FRONT_ORDER',
            payload:function (a,b){
                if(a.population > b.population) return -1;
                if(a.population < b.population) return 1;
                return 0;
            }}
          )}
      default:
        break;
  }}
