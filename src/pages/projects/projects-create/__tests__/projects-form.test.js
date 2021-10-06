import { render, screen } from '@testing-library/react';
import ProjectsCreate from "../projects-create";
// import Projects from "../../projects-list"
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';


it("should render the Input fields", () => {
    // .. Write your code here..
    //1. Act
    render(
    <BrowserRouter>
        <ProjectsCreate/>
    </BrowserRouter>)
    //2. Arrange
    const projectNameInput = screen.getByRole('textbox', {name: /project name/i})
    const languageSelector = screen.getByRole('combobox')
    const projectBriefInput = screen.getByRole('textbox', {name: /project brief/i})
    const coachesTipsInput = screen.getByRole('textbox', {name: /coaches tips/i})

    //3. Assert
    expect(projectNameInput).toBeInTheDocument();
    expect(languageSelector).toBeInTheDocument();
    expect(projectBriefInput).toBeInTheDocument();
    expect(coachesTipsInput).toBeInTheDocument();
});

it ("should show required for an empty input on save", async() => {
    // .. Write your code here..
    //1. Act
    render(
        <BrowserRouter>
            <ProjectsCreate/>
        </BrowserRouter>)

    //2. Arrange
    const saveButton = await screen.findByRole('button', {name: /save/i});
    userEvent.click(saveButton);
    
    //3. Assert
    const alert = await screen.findAllByText("*Required");
    expect(alert.length).toBe(3);
});
