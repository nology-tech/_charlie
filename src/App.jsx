import './App.scss';
import AddStudent from './pages/addstudent/addstudent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
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
