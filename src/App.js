import './App.scss';
import Home from './Pages/Home/Home';
import Watch from './Pages/Watch/Watch';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthContext";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/register" />}
          </Route>

          <Route exact path="/register">
            {!user ? <Register /> : <Redirect to="/" />}
          </Route>

          <Route exact path="/login">
            {!user ? <Login /> : <Redirect to="/" />}
          </Route>

          {user && (
            <>
              <Route exact path="/movies">
                <Home type="movie" />
              </Route>

              <Route exact path="/series">
                <Home type="series" />
              </Route>

              <Route exact path="/watch">
                <Watch />
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
