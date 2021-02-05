import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
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
              <h1>This is home path</h1>
            </Route>
            <Route path="/">
              <h1>This is root path</h1>
            </Route>
          </Switch>
        </Router>
      </div>

      {/* React Router */}
    </div>
  );
}

export default App;
