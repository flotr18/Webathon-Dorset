
import './App.css';
import Home from 'Home';
import MovieList from 'MovieList';
import SerieList from 'SerieList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
      <main>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/Movie' component={MovieList}/>
          <Route path='/Serie' component={SerieList}/>

        </Switch>
      </main>
  );
}

export default App;
