import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import HomeView from './Views/HomeView';
import Register from './Views/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/register">
          <Register />
        </Route>
        <Route>
          <HomeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
