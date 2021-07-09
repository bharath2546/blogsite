import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import { Context } from './context/Context';
import { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => {

  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/register">
          {user ?  <Home />:<Register />}
        </Route>
        <Route path="/login">
            {user ? <Home />:<Login />}
        </Route>
        <Route path="/write">
            {user ? <Write />:<Login />}
        </Route>
        <Route path="/settings">
            {user ? <Settings/>:<Login/>}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
