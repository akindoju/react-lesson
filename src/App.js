import './App.css';
import SignIn from './components/signin/signin';
import MainPage from './components/mainpage/mainpage';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignInContainer from './components/signin/signin.container';

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !user ? <SignInContainer /> : <Redirect to="/mainpage" />
          }
        />
        <Route
          path="/mainpage"
          exact
          render={() => (user ? <MainPage /> : <Redirect to="/" />)}
        />
      </Switch>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   user: state.user.currentUser,
// });

export default App;
