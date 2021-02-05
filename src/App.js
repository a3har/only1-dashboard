import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyTeam from "./Pages/MyTeam/MyTeam";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Header />
        <Router>
          <Switch>
            <Route path="/team">
              <MyTeam />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>

      {/* React Router */}
    </div>
  );
}

export default App;
