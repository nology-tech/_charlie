import './App.scss';
import Navbar from "./components/navbar/navbar";

import Dashboard from "./pages/dashboard/dashboard";
import Students from "./pages/students/students";
import Projects from "./pages/projects/projects";
import Enrollment from "./pages/enrollment/enrollment";
import Settings from "./pages/settings/settings";

import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <div className="App">
        
            <Navbar />
            
            <Switch>

              <Route path="/students"> 
                <Students />
              </Route>

              <Route path="/projects"> 
                <Projects />
              </Route>

              <Route path="/enrollment"> 
                <Enrollment />
              </Route>

              <Route path="/settings"> 
                <Settings />
              </Route>

              <Route path="/"> 
                <Dashboard />
              </Route>
            </Switch>

      </div>
    </Router>
        
  );
}

export default App;
