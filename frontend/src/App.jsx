import './App.scss';

import Navbar from "./components/navbar/navbar";
import ProjectReview from "./pages/students/students-projects-index/review/projectreview";

import Reviews from "./pages/reviews/reviews";

import SubmissionDetails from "./pages/students/students-projects-index/studentsprojectsindex";
import Settings from "./pages/settings/settings";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Students from "./pages/students/students-list/students-list";
import AddStudent from './pages/students/student-add/addstudent';
import ProjectList from './pages/projects/projects-list/projects-list';
import ProjectCreate from './pages/projects/projects-create/projects-create';
import StudentOverview from 'pages/students/student-overview/student-overview';

function App() {

  return (
    <div className="app">
      <Router>
        <div className="col">
          <Navbar />
        </div>
        
        <div className="col">
          <Switch>
                        
            <Route path="/projects">
              <ProjectList></ProjectList>
            </Route>


            <Route path="/project/create">
              <ProjectCreate></ProjectCreate>
            </Route>


            <Route path="/reviews">
              <Reviews />
            </Route>

            
            <Route path="/settings">
              <Settings />
            </Route>


            <Route exact path="/student/:studentId/project/:projectId/review">
              <ProjectReview />
            </Route>

            <Route path="/student/:studentId/project/:projectId">
              <SubmissionDetails />
            </Route>

            <Route exact path="/student/:studentId/overview">
              <StudentOverview />
            </Route>

            <Route path="/student/create">
              <AddStudent></AddStudent>
            </Route>
            
            {/* <Route path="/student/:studentId/project/:projectId">
              <StudentDetails></StudentDetails>
            </Route> */}

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
