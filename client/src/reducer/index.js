const initialState = {
    countries: [],
    allCountries: [],
    selectedCountry: { },
    activityList: [],
}

const rootReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case 'GET_ACTIVITIES':
            return {
                ...state,
                countries: action.payload
            }
        case 'GET_COUNTRY_DETAIL':
            return {
                ...state,
                selectedCountry: action.payload 
            }
        case 'FILTER_BY_CONTINENT':
            const allCountries = state.allCountries;
            const filterContinent = action.payload === "All" ? allCountries : allCountries.filter(el => el.continent === action.payload)
            return {
                ...state,
                countries: filterContinent
            }
        case 'CLEAR_COUNTRY_DETAIL':
            return {
                ...state,
                selectedCountry: action.payload
            }
        case 'SEARCH_COUNTRY':
            return {
                ...state,
                allCountries: action.payload,
                countries: action.payload
            }
        case 'CLEAR_RESULT_COUNTRY':
            return {
                ...state,
                resultCountries: action.payload
            }
        case 'ADD_ACTIVITY':
            return {
                ...state,
                activityList: [...state.activityList, action.payload]
            }
        case 'GET_COUNTRIES_ORDERED':
            return {
                ...state,
                resultCountries: action.payload
            }
        case 'FILTER_COUNTRY':
            return {
                ...state,
                resultCountries: action.payload
            }
        case 'FRONT_FILTER':
            return {
                ...state,
                resultCountries: [...state.countries].filter( CT => CT.continent === action.payload )
            }
        case 'FRONT_ORDER':
            return {
                ...state,
                countries: [...state.allCountries].sort(action.payload)
            }
        default: 
            return {
                ...state
            }
    }
}

export default rootReducer;