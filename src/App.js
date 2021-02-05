import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Card from "./components/Card/Card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app__content">
        <Header />
        <Router>
          <Switch>
            <Route path="/home">
              <Card />
            </Route>
            <Route path="/">
              <Card />
            </Route>
          </Switch>
        </Router>
      </div>

      {/* React Router */}
    </div>
  );
}

export default App;
