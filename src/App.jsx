import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState} from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const loginClicker= (e) =>{
     e.preventDefault()
     setLoggedIn(!loggedIn)
   }
  return (
    <Router>
      <Topbar user = {loggedIn}
      onClick={loginClicker} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
        {(loggedIn === true)? <Settings /> :  <Register onClick={loginClicker} />}
        </Route>
        <Route path="/login"> {(loggedIn === true)? <Settings /> : <Login onClick={loginClicker} />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{(loggedIn === true) ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {(loggedIn === true)?  <Settings onClick={loginClicker} /> : <Login />}
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
