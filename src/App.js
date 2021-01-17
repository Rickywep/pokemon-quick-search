import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Pokemons from './components/Pokemons';
import Header from './components/Header';
import ScrollTop from './components/ScrollTop';
import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollTop />
        <Switch>
          <Route path="/details/:name">
            <Details />
          </Route>
          <Route exact path="/">
            <Pokemons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
