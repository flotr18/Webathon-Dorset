
import './App.css';
import Home from './Home';
import MovieList from './MovieList';
import SerieList from './SerieList';
import {
  Switch,
  Route,
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
