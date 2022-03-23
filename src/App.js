import './App.css';
import Home from './views/Home';
import Players from './views/Players';
import Teams from './views/Teams';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/players">
            <Players />
          </Route>
          <Route path="/teams/:id">
            <Teams />
          </Route>
          <Route path="/teams">
            <Teams />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
