import './App.scss';

import Navbar from "./components/navbar/navbar";

import Dashboard from "./pages/dashboard/dashboard";

import SubmissionDetails from "./pages/students/students-projects-index/studentsprojectsindex";
import Settings from "./pages/settings/settings";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Students from "./pages/students/students-list/students-list";
import StudentDetails from './pages/students/student-details/student-details';
import AddStudent from './pages/students/student-add/addstudent';
import ProjectList from './pages/projects/projects-list/projects-list';

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

            <Route path="/projects">
              <ProjectList></ProjectList>
            </Route>

            <Route path="/projects/:studentId/:projectId">
              <SubmissionDetails />
            </Route>
            

            <Route path="/settings">
              <Settings />
            </Route>

            <Route path={["/students", "/"]}>
              <Students />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
