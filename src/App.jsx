import './App.scss';

import Navbar from "./components/navbar/navbar";

import Dashboard from "./pages/dashboard/dashboard";

import SubmissionDetails from "./pages/students/students-projects-index/studentsprojectsindex";
import Enrollment from "./pages/enrollment/enrollment";
import Settings from "./pages/settings/settings";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Students from "./pages/students/students-list/students";
import StudentDetails from './pages/students/student-details/studentdetails';
import AddStudent from './pages/students/student-add/addstudent';

function App() {

  return (
    <div className="app">
      <Router>
        <div className="col">
          <Navbar />
        </div>
        <div className="col">
          <Switch>
            <Route path="/student/create">
              <AddStudent></AddStudent>
            </Route>
            
            <Route path="/student/:id">
              <StudentDetails></StudentDetails>
            </Route>

            <Route path="/student/:id/project/:id">
              <SubmissionDetails />
            </Route>

            <Route path="/students">
              <Students />
            </Route>
            
            <Route path="/projects">
            <SubmissionDetails />
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
    </div>
  );
}

export default App;
