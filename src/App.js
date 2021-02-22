import './App.css';
import SignIn from './components/signin/sign';
import MainPage from './components/mainpage/mainpage';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <SignIn />
        </Route>
        <Route path="/mainpage" exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
