import './App.css';
import MovieList from './MovieList';
import SerieList from "./SerieList";
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from "./Home";


function App() {
  return (
      <main>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/movie' component={MovieList}/>
              <Route path='/serie' component={SerieList}/>
          </Switch>
      </main>
  );
}

export default App;
