import './App.css';
import Home from '../Home/Home';
import PersonDetails from '../People/PersonDetails';
import starWarsLog from '../images/starwars-logo.png';
import {
BrowserRouter as Router,
Route,
Routes,
} from "react-router-dom";

function App() {
  return (
      <Router>
        <img src={ starWarsLog } className='logo-style' />
          <Routes>
            <Route path="/personDetails/:id" element={ <PersonDetails /> }/>
            <Route path="/" element={ <Home /> } />
          </Routes>
      </Router>
  );
}

export default App;
