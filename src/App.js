import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyTeam from "./Pages/MyTeam/MyTeam";
function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Header />
          <Switch>
            <Route path="/team" component={MyTeam} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </div>

        {/* React Router */}
      </div>
    </Router>
  );
}

export default App;
