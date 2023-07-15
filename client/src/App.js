import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
//import Country from './components';
//import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import CountryDetail from './components/CountryDetail/CountryDetail';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
    <Link to='/'> 
     <h1 className='H1'>Henry Countries</h1>
    </Link>
    <Link to='/about'>
     <h2 className='H1'>About Me</h2>
    </Link>
     <Route exact path='/' component={LandingPage}/>
     <Route path='/home' component={Home}/>
     <Route exact path = '/countries/:id' render={({match}) => 
          <CountryDetail id={match.params.id}/>}/>
    <Route exact path='/about' component={AboutMe}/>
    </div>
  </BrowserRouter>
  );
}

export default App;
