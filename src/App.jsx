import './App.scss';
import AddStudent from './pages/addstudent/addstudent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/student-details" exact>
              <AddStudent />
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default App;
