import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import MovieList from "./containers/MovieList/MovieList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:movieId" exact component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
