import { Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from 'history';
import Card from "../../../../components/cards/card/card";
import projects from "../../../../data/projects";

it("Should render all elements on the page", () => {
  for (let i = 0; i < projects.length; i++) {
    const history = createMemoryHistory();
    const route = `/student/0/project/${i}`;
    history.push(route);
    
    render(
      <Router history={history}>
        <Card project={projects[i]}/>
      </Router>
    );
    
    expect(screen.getByTestId(`project-${i}`)).toBeInTheDocument();
  }
});