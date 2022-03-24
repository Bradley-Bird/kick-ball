import Header from './views/Header';
import Home from './views/Home';
import Players from './views/Players';
import Player from './views/Player';
import Teams from './views/Teams';
import Team from './views/Team';
import GlobalStyle from './components/styles/GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route path="/players/:id">
          <Player />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/teams/:id">
          <Team />
        </Route>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
