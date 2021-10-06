import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';
import Navbar from "./components/navbar/navbar";
import ProjectsCreate from "./pages/projects/projects-create/projects-create"
import ProjectsList from "./pages/projects/projects-list/projects-list";
import Settings from "./pages/settings/settings";
import StudentsList from "./pages/students/students-list/students-list";
import StudentDetails from './pages/students/student-details/student-details';
import AddStudent from './pages/students/student-add/addstudent';
import ReviewList from './pages/reviews/review-list/review-list';
import AddReview from './pages/reviews/add-review/add-review';

const App = () => {
  return (
    <div className="app">
      <Router>
        <div className="col">
          <Navbar />
        </div>
        <div className="col">
          <Switch>
            

            {/* 2. Project routes for list, create, and details */}
            <Route path="/projects-create">
              <ProjectsCreate />
            </Route>

            <Route path="/projects">
              <ProjectsList />
            </Route>

            {/* 3. Project routes for list and create */}
            <Route path="/reviews">
              <ReviewList></ReviewList>
            </Route>
            <Route path="/review/create">
              <AddReview></AddReview>
            </Route>

            {/* 4. Other Routes :) */}
            <Route path="/settings">
              <Settings />
            </Route>

            {/* 1. Student routes for list, create, and details */}
            <Route path="/students">
              <StudentsList/>
            </Route>
            <Route path="/student/create">
              <AddStudent></AddStudent>
            </Route>
            <Route path="/student/:id">
              <StudentDetails></StudentDetails>
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;